//阻塞代码示例
    // var fs = require("fs");
    // var data = fs.readFileSync('input.txt');
    // console.log(data.toString());
    // console.log("程序执行结束");
// 非阻塞代码示例
    var fs = require("fs");
    fs.readFile("input.txt", function(err, data){
        if(err) return console.error(err);
        console.log(data.toString());
    });
    
    console.log('程序执行结束！');

    //以上程序中fs.readFile()是异步函数用于读取文件。如果在读取文件过程中发生错误，错误err对象就会输出错误信息。
    // 如果没发生错误,readFile 跳过err对象的输出，文件内容就通过回调函数输出