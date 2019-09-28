Vue.component('like',{
    template:'<button @click="like-click()">❤ {{ like_count }}</button>',
    data:function(){
        return {
        like_count:0,
        liked:false
        }
    },
    methods:{
        like_click:function(){
           if(!this.liked)
            {
                this.like_count++;
            }else{
                this.like_count--;
            }
        
            this.liked =!this.liked;
    }
}


})