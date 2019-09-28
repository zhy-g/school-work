#   VsCode
## 一.什么是VsCode ##
>Visual Studio Code (简称VS Code / VSC)是一款免费开源的现代化轻量级代码编辑器，支持几乎所有主流的开发语言的语法高亮、只能代码不全、自定义热键、括号匹配、代码片段、代码对比Diff、GIF等特性，支持插件扩展，并针对网页开发和云端应用开发做了优化。软化吧跨平台支持，Win、Mac以及Linux。

[点我 即可转到VS Code 官方网址](https://code.visualstudio.com/docs/?dv=win)


## 二.Vsc常用快捷键
1. 同时打开多个窗口（查看多个项目）：
    * 打开新窗口：Ctrl + Shift + N
    * 关闭窗口 ： Ctrl + Shift + W

2. 同时打开多个编辑器（查看多个文件）：
     新建文件 Ctrl + N
    * 历史打开文件之间切换 Ctrl + Tab, Alt + Left, Alt + Right
    * 切出一个新的编辑器（最多3个） Ctrl + \
    * 左中右3个编辑器的快捷键Ctrl + 1, Ctrl + 2, Ctrl + 3
    * 编辑器换位置，Ctrl + k然后按Left 或 Right

3. 格式调整：
    * 代码行缩进 Ctrl + [, Ctrl + ]
    * 折叠打开代码块 Ctrl + Shift + [ , Ctrl + Shift + ]
    * 复制 Ctrl + C
    * 粘贴 Ctrl + V
    * 剪切 Ctrl + X
    * 在当前行下边插入一行 Ctrl + Enter
    * 在当前行上方插入一行 Ctrl + Shift + Enter
 
 4. 光标相关：
    * 移动到行首： Home
    * 移动到行尾:  End
    * 移动到文件结尾： Ctrl + End
    * 移动到文件开头： Ctrl + Home
    * 移动到后半个括号： Ctrl + Shift+ J
    * 选择从光标到行尾：Shift + End
    * 选择从行尾到光标处：Shift + Home
    * 删除光标右侧的所有字: Ctrl + Delete
    * 缩小选择: Shift + Ctrl + Left 
    * 展开选择： Shift + Ctrl + right
    * Multi(多)-Cursor(光标): Alt + Click + Cursor 或者Ctrl + Alt + Down 或者  Ctrl + Alt + Up
    * 同时选中所有匹配的： Ctrl +_ Shift + L
    * 回退上一个光标操作: Ctrl + U 

5. 重构代码：
    * 跳转到定义处：F12（不明白）
    * 定义处缩略图：只看一眼而不跳转过去Alt + F12（不会用）
    * 列出所有的引用： Shift + F12
    * 同时修改本文件中所有匹配的 ： Ctrl  + F12
    * 重命名: F2
    * 跳转到下一个Error 或 Warning： 当有多个错误时可以按F8逐个跳转

6. 查找替换：
    * 查找：Ctrl + F
    * 查找替换： Ctrl + H
    * 整个文件中查找： Ctrl + Shift + F

7. 显示相关
    * 全屏: F11
    * 侧边栏显/隐： Ctrl + B
    * Open Preview: Ctrl + Shift + V

### 常用的插件
* 中文语言包 Chinese (Simplified) Language Pack for Visual Studio Code 
* MarkDown预览增强 Markdown Preview Enhanced 
* 代码拼写检查器 Code Spell Checker 
* 浏览器预览增强 open in browser 
* 检查英文语句中的中文符号 sneak mark 
* VS Code图标 vscode-icons 
* 格式化代码工具 beautify 
* HTML代码提示器 HTML Snippets 
* CSS样式提升器 HTML CSS Support 
* 各种皮肤主题 例如：One Dark Pro，Bimbo，Atom One  Dark Theme 


### 三.MarkDown基础标签:

* # 标题一
* ## 标题二
* ### 标题三
* #### 标题四
* ##### 标题五
* ##### 标题六

```
# 标题一
## 标题二
### 标题三
#### 标题四
##### 标题五
##### 标题六
```

加粗文本不能空格

> **文本加粗**

```
**文本加粗**
```

*斜体*

```
*斜体*
````

~~删除字~~

```
~~删除字~~
```

以下是一条分割线

---

```
以下是一条分割线

---
```

>引用语法的文字

```
>引用语法的文字
```
* 插入链接

[ MarkDown 百度百科](https://baike.so.com/doc/6949586-7171987.html)

~~~
[ MarkDown 百度百科](https://baike.so.com/doc/6949586-7171987.html)
~~~

* 插入照片

![VSC](img\VSC.jpg)

~~~
![VSC](img\VSC.jpg)
~~~

MarkDown编辑工具推荐:

* [VSCode](https://code.visualstudio.com/docs/?dv=win)
* [Typore](https://typora.io/)
* [关于Typore功能介绍](https://www.jianshu.com/p/b7fd16a44508)
* [印象笔记](https://www.yinxiang.com/)
* [如何高校率使用和整理印象笔记？](https://www.zhihu.com/question/25852838)
* [cm MarkDown 作业部落](https://www.zybuluo.com/cmd/)

#### Git
**Git简介**

> Git是什么？Git 是Linux的创始人Linus Torvalds 开源的一款分布式版本控制系统，以帮助开发者更好的对项目进行版本管理。每一个优秀的开发者在进行项目开发时都会第一时间嗝自己的项目加上Git，以便能更好的追踪代码修改，进行版本回溯等操作。在多人协作的开发过程中，Git更是必不可少的。

* git基本原理
>git版本管理工具，有3个工作区：
    1.工作目录
    2.暂放区---存放工作中更改的文件，避免项目代码丢失。
    3.代码仓库---当开发功能足够成为一个版本时，提交到仓库。其实就是讲暂存区中的代码复制一份存储到代码仓库中。

    * Git的基本工作流程
        *本地git管理：
            1.初始化代码仓库
            git init

            2.工作目标提交到暂放区
         1) 新建一个html文件：git add sun.html
         2) 提交html文件

            3.暂放区代码提交到代码仓库
            1).git checkout --sun.html表示恢复文件sun.html
            2).git checkout sun.html 表示切换到分支sun.html
            3).git reset --hart commitID  退回到commitID
git bash 命令行模式的基本特点：
> 简介，迅速，高效
    
* git bash 基础命令
> pwd(print working directory) 查看当前所在路径--绝对轮径
cd(change directory) 创建目录
mkdir(mark directory) 创建目录
touch 创建目录
li(list) 查看当前目录下的内容
cat 查看文件内容(一次性将内容全部显示)
clear 清屏
q(quit) 退出

Git有两种操作界面，命令行模式和图形界面模式，我们主要使用命令行模式。在Windows下我们安装好Git并点击Git Bash图形启动Git之后会出现一个命令行窗口如下所示：
    ![](img\git-show.jpg)
* Git Bash命令行模式是使用的Linux系统命令行，所有和Window系统有一些差异，例如上图中/c/User/33431这个路径就和Window系统的下显示C\Users\33431路径显示略有不同，但实际上都是显示的同一个目录路径，实际上 /c/Users/33431=C:\Users\33431。

Git官方教程

**GitHub简介**
> GitHub是一个机遇it的代码托管平台，GitHub由Chris Wanstrath，PH Hyett 与Tom Preston-Werner三位开发者在2008年4月创办。这个星球上最流行的开源托管服务。慕青以托管上百万的git项目，很多知名开源项目迁入GitHub，比如Ruby on Rails、jQuery、Ruby、Erlang/OTP;近年流行的开源库往往在GitHub首发，例如：BootStrap、Node.js、CoffeScript等。

* 注册GitHub账号
    * [GitHub网址](https://github.com/)
![](img\git-sign.jpg)
* 首先我们登陆GitHub官网按照提示一步一步申请免费的账号，并且初始化仓库。
然后打开Git Bash在命令行模式下通过cd命令进入对应目录，在下图我进入的桌面(Desktop)目录
![](img\git1.png)

* 我们首先设置对应GitHub账号用户名和邮件
![](img\git2.png)

> git config --global user.name "你自己的注册名"
git config --global user.name "你自己的注册邮件"

* 从远程GitHub仓库克隆刚刚初始化的项目
![](img\git3.png)
> git clone http://github.com  你自己的仓库地址

* 进入克隆目录，然后当完成对文件的编辑保存好之后，我们先将修改后的文件添加到缓存区。
![](img\git4.png)
> git add .
git commit -m"代码提交的信息"
* 将提交的结果推送代码到远程GitHub仓库(在这个过程，系统会要求我们输入远程GitHub的账号和密码，按提示输入即可，由于还原系统的问题，我们就不适用 SSH方式登录，但是在后面我们会单独介绍SSH免密登录。)
![](img\git5.png)

> git push origin master

#### Vue.js
![](img\logo.png)
[Vue.js官方网站](https://cn.vuejs.org/)

### Vue简介

> Vue.js是现今三大流行前端框架之一(Angular.js,React.js,Vue.js)，是一个只要拥有的html，css，JavaScript基础，就能很快学会的易用灵活的用于构建用户界面的渐进式前端框架。
#### Vue.js新手入门
* 使用Vue.js非常简单，在HTML页面中使用script标签导入Vue.js文件就可以了
如下例：
> 
```
<!-- 可以通过CDN直接使用网上的资源-->

<script src="https://cdn.jsdeliver.net/npm/vue/dist/vue.js"></script>

<!-- 也可以使用本地资源 -->

<script src="vue.js"></script>
```
* 接下来我们就可以写一个Hello Vue.js
>
```
<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Hello!Vue.js</title>
        <!-- 导入Vue.js -->
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    </head>
    <body>
        <div id="app">
            {{ message }}
        </div>


        <script>
            var app = new Vue({
                el: 'app',
                data: {
                    message: 'Hello Vue.js!!!!'
                }
            })
        
        </script>

        </body>
    </html>
```
* Vue.js的Demo
    
    *vue-demo.html HTML 主体文件，vue.js Vue框架文件，mian.js Vue实例文件
>
```
   <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Vue入门</title>
        
    </head>
    <body>
        
            <div id="app">
                <input type="text" v-model='name'> <span v-show='name'>你的名字：{{name}}</span><br>
                <input type="text" v-model='age'> <span v-show='age'>你的年龄：{{age}}</span><br>
                <input type="text" v-model='sex'> <span v-show='sex'>你的性别：{{sex}}</span><br>
                <ul>
                    <li v-for='food in foodList'>{{ food }}</li>
                </ul>
            
            </div>

            <!-- 导入Vue框架 -->
            <script src="vue.js"></script>
            <script src="main.js"></script>
    </body>
    </html>
```
* vue-demo.html
>
```
      //vue实例
    var app = new Vue({
        el: '#app',
        data: {
        name: null,
        age:null ,
        sex:null,
        foodList:['葱','姜','蒜']
        }
    });
```

*main.js

**Vue.js的语法特点**
> 双括号{{}}语法，Vue.js通过{{}}来实现数据的渲染
指令(Directives)是带有v-前缀的有Vue.js定义的特殊属性。例如：v-for，v-bind，v-show等等这些指令，除了Vue.js自带的属性，我们还可以自定义Vue指令。
el是ELement的缩写，el属性对应的是vue框架挂载在HTML中对应的视图
data是Vue实例的数据属性

##v-for指令##
>通过v-for指令来实现循环数据遍历，使用特定语法v-for="alias in expression",为当前遍历的元素提供别名，通常使用在ul或ol标签中li选项中。
>
```
 <div id="app">
           <ul>
                <!-- <li v-for="food in foodList">{{ food }} </li> -->
                <li v-for='food in foodList'>
                        {{food.name}} ￥：{{food.discount ? food.price*food.discount : food.price}} 折扣率{{food.discount}}
                </li>
            </ul>

    </div>

    <script src="vue.js"></script>
    <script src="v-for.js"></script>
```

* vue-01.html
> 
```
var app=new Vue({
    el:"app",
    data:{
        foodList:[
            {name:'可乐',price:3,discount:0.9},
            {name:'薯条',price:5,discount:0.8},
            {name:'炸鸡',price:10,discount:0}
        ]
    }
})
```
* v-for.js
