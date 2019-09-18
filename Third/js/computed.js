var app = new Vue({
    el:"#app",
    data:{
        math:120,
        Chinese:90,
        English:100
    },
    computed:{
        sum:function(){
            return this.math + this.Chinese + this.English;
        },
        average:function(){
            return Math.round(this.sum / 3);
        },
    // methods:{
    //     sum:function(){
    //         return this.math + this.Chinese + this.English;
    //     },
    //     average:function(){
    //         return Math.round(this.sum / 3);
    //     },
    // }
}
})
// computed 和 methods两种方法没有区别：
//     computed 会缓存数据，methods则不会