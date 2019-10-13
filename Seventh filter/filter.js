Vue.filter("meter",function(val,unit){
    val = val || 0;
    unit = unit || 'm'; //unit 单位
    return (val/1000).toFixed(2) + unit; //toFixed(2)保留两位小数
});

Vue.filter('currency', function(val,unit){
    val = val || 0;
    unit = unit || 'RMB';
    return (val * 7.1437).toFixed(2) + unit;

});
Vue.filter("currency1",function(val,unit){
    val = val || 0;
    unit = unit || "USD";
    return (val * 0.14).toFixed(2) + unit;
})

new Vue({
    el:"#app",
    data:{
        price: 10,
        length:100,
        price1:10,
    }
})