;(
    function(){
        var Event = new Vue();

        function copy(obj){
            return Object.assign({},obj);
        }

        Vue.component('task',{
            template:'#task-tpl',
            props:['todo'],
            methods:{
                action: function (name,params){
                    Event.$emit(name,params);
                }

            }
        });

        new Vue({
            el:'#main',
            data:{
                list:[],
                current:{},
                last_id:0, //默认ID值为0

            },
            mounted:function(){
                var me = this;
                this.list = ms.get('list') || this.list;
                this.last_id= ms.get('last_id') || this.last_id;  //获取ID值
           
                Event.$on('remove', function(id){
                    if(id){
                        me.remove(id);
                    }
                });

                Event.$on('toggle_complete', function(id){
                    if(id){
                        me.toggle_complete(id);
                    }
                });

                Event.$on('set_current', function(id){
                    if(id){
                        me.set_current(id);
                    }
                });
            },
            methods:{
                add:function(){
                    var is_update,id;
                    is_update = id =this.current.id;
                    if(is_update){
                      var index =this.find_index(id);
                        Vue.set(this.list, index, copy(this.current));
                       
                       
                    }else{

                        var title = this.current.title;
                        if(!title && title !== 0) return;

                        var todo = copy(this.current);
                        this.last_id++;             //ID自增+1
                        ms.set('last_id',this.last_id);  //将id值通过 set方法保存到local storage
                        todo.id =this.last_id;
                        this.list.push(todo);
                        
                    }
                    this.reset_current();
                },
                remove:function(id){
                    var index =  this.find_index(id);
                    this.list.splice(index,1);
                },
                // next_id(){               
                //     return this.list.length+1; 通过索引来获取ID有问题，会导致ID相同
                // },
                set_current:function(todo){
                    this.current= copy(todo);
                },
                reset_current:function(){
                    this.set_current({});
                },
                find_index:function(id){
                    return this.list.findIndex(function(item){
                        return item.id == id;
                    })
                },
                toggle_complete: function(id){
                    var i = this.find_index(id);
                    Vue.set(this.list[i],'completed', !this.list[i].complete);
                    this.list[i].complete = !this.list[i].complete;
                    
                }


            },
            watch:{
                list:{
                    deep:true,
                    handler:function(new_val,old_val){
                        if(new_val){
                            ms.set('list',new_val);
                        }else{
                            ms.set('list',[]);
                        }
                    }
                }
            }
     });
         
    }
)();