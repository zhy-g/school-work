;(function(){
    window.msg = {
        set: set,
        get:get,
    }

    //封装localStorage
    function set(key, val){
        localStorage.setItem(key,JSON.stringify(val));
    }
    function get (key){
        var json = localStorage.getItem(key);
        if(json){
            return JSON.parse(json);
        }
    }
   
})();



// 总结：
// JSON.parse() //从一个字符串中解析出JSON对象
