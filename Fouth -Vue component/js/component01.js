
// 全局组件
// Vue.component('alert',{
//     template: '<button @click="on_click">弹一下</button>',
//     methods:{
//         on_click:function(){
//             alert('Yo~~~~~~~~!');
//         }
//     }
// })

//   局部组件
var alert_component={
    template: '<button @click="on_click">弹一下</button>',
    methods:{
        on_click:function(){
            alert('Yo~~~~~~~~!');
        }
    }
}


new Vue({
    el:'#app1',
    components:{
         alert:alert_component
    }

})

// new Vue({
//     el:'#app2',
// })