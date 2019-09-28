Vue.component('alert', {
   template:'<button @click="on_click">弹出文字</button>',
    on_click:function(){
        alert("hello");
    },
    methods:{
        on_click:function(){
            alert("Hello");
        }
    },
})
new Vue({
    el:"#app"
})