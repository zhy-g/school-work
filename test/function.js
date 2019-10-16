// function message(){
//     var i = 10;
//     alert(i + "123"); //10123
// }
 
// function message(i, unit){
//    alert(i + text); //7m
// }
// message(7,'m');

//函数声明
// function sayHi(){
//     alert('Hello world');
// }
//还有另外一种声明
// let sayHi = function(){
//     alert("Hello");
// };
// sayHi();

// function sayHi(){   //创建
//     alert('Hello world');
// }
// let func = sayHi; //复制

// func();  //input: Hello world
// sayHi(); // input: Hello world 


//箭头函数

// let  func = (arg1,arg2,arg3) => expression //函数表达式
//^等价于:
// let func = function(arg1, arg2, arg3){
//     expression;
// }

// let sum = (a,b) =>  a+b;

//^等价于：
// let sum = function(a,b){
//     return a+b;
// }

// alert(sum(1,3)); //4

// 多行箭头函数
// let sum = () => {
//     let i = 5;
//     alert(i);
// }
// sum(); //5

// 任务： 用箭头函数重写表达式
let q = () => {
    let ques = prompt("Do you agree?", "Yes");   
    let answer = (ques == "Yes") ? () => alert("Your agreed") : 
    () => alert("No"); 
    answer();
};
q();