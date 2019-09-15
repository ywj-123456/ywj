# 什么是VsCode?
> VS Code是微软推出的新一代<u>**免费开源**</u>的现代化<u>**轻量级**</u>代码编辑器，支持几乎所有主流的开发语言的语法高亮、智能代码补全、自定义快捷键、括号匹配和颜色区分、代码片段、代码对比 Diff、GIT命令 等特性，支持插件扩展，并针对网页开发和云端应用开发做了优化。VS Code跨平台支持 Win、Mac 以及 Linux，运行流畅，可以算得上是微软的难得良心之作。

# VsCode功能
![](http://49.234.236.217/tool_files/Image.png)

#VsCode的常用快捷键
* Ctrl + Shift + E 资源管理器
* Ctrl + Shift + F 搜索
* Ctrl + Shift + G 源代码管理器
* Ctrl + Shift + D 调试
* Ctrl + Shift + X 插件扩展
* F1 或 Ctrl+ Shift + p 打开命令面板
* Shift + Alt + F 代码格式化
* Ctrl+ F 查找
* Ctrl+ H 查找替换
* Ctrl+ N 新建文件
* Ctrl+ S 保存
* Alt + ↑ 或 Alt + ↓ 上下移动一行
* Shift + Alt + ↑ 或 Shift + Alt + ↓ 向 上向下复制一行

#什么是MarkDown
> **Markdown**是一种可以使用普通文本编辑器编写的比HTML更加简单易学的标记语言，通过简单的标记语法，它可以使普通文本内容具有一定的格式，同时MarkDown又能转换成HTML,PDF等多种格式。

#MarkDown语法
>以下是MarkDown的一些比较基础的语法，不同的MarkDown工具有更多更强大的语法功能实现。在日常编写MarkDown文档过程中需要特别注意的是**中文符号**和**空格**。


##1-6阶标题
```
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```
>实例效果如下：
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题



####文本加粗
```
**文本加粗**
```
>实例效果如下：

**文本加粗**


####斜体
```
*斜体*
```
>实例效果如下：

*斜体*

####下划线
```
<u>下划线</u>
```
>实例效果如下：

<u>下划线</u>
####删除线
```
~~删除线~~
```
>实例效果如下：

~~删除线~~

####分割线
```
下面是一条分割线
***
```
>实例效果如下：

下面是一条分割线
***

####引用文本
```
>这是介绍MarkDown引用文本语法的文字。
```
>实例效果如下：

>这是介绍MarkDown引用文本语法的文字。
####符号列表或者数字列表
```
* 圆点符号列表
1. 数字序号列表
2. 数字序号列表
```
>实例效果如下：

* 圆点符号列表
1. 数字序号列表
2. 数字序号列表
####文本高亮
```
==文本高亮==
```
>实例效果如下：

==文本高亮==
####代办事项
```
* [] JavaScript
* [x] MarkDown
```
>实例效果如下：

* [ ] JavaScript
* [x] MarkDown
####插入链接
```
[MarkDown百度百科](https://baike.baidu.com/item/markdown/3245829?fr=aladdin)
```
>实例效果如下：

[MarkDown百度百科](https://baike.baidu.com/item/markdown/3245829?fr=aladdin)
####插入图片
```
![](http://is4-ssl.mzstatic.com/image/thumb/Purple118/v4/f6/a3/f3/f6a3fb8-8243-05ad-41f2-2fe69ae9d0d5/source/512x512bb.jpg)
```
>实例效果如下：

![](http://is4-ssl.mzstatic.com/image/thumb/Purple118/v4/f6/a3/f3/f6a3fb8-8243-05ad-41f2-2fe69ae9d0d5/source/512x512bb.jpg)
####插入表格
```
| 账户类型 | 免费账户 | 标准账户 | 高级账户 |
| --- | --- | --- | --- |
| 账户流量 | 60M | 1GB | 10GB |
| 设备数目 | 2台 | 无限制 | 无限制 |
| 当前价格 | 免费 | ¥8.17/月 | ¥12.3/月 |
```
>实例效果如下：


| 账户类型 | 免费账户 | 标准账户 | 高级账户 |
| --- | --- | --- | --- |
| 账户流量 | 60M | 1GB | 10GB |
| 设备数目 | 2台 | 无限制 | 无限制 |
| 当前价格 | 免费 | ¥8.17/月 | ¥12.3/月 |
####插入源代码

> 实例效果如下：

```html
  <!DOCTYPE html>
  <html lang='en'>
  <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width,inital-scale=1.0">
     <meta http-equiv="X-UA-Compatible" content="ie=edge">
     <title>Document</title>
  </head>
  <body>

  </body>
  </html>
```




# Git & GitHub

# Git简介
> Git是什么？Git是Linux的创始人Linus Torvalds开源的一款分布式版本控制系统，以帮助开发者更好的对项目进行版本管理。每一个优秀的开发者再进行项目开发是都会第一时间给自己的项目加上Git，以便能更好的追踪代码修改，进行版本回溯等操作。在多人秀做的开发过程中，Git更是必不可少的。

* git基本原理
> git版本管理工具，有3个工作区：
1.工作目录
2.暂存区---存放工作中更改的文件，避免项目代码丢失
3.代码仓库---当开发功能足够成为一个版本时，提交到仓库。其实就是将暂存区中代码复制一份存储到代码仓库中。

* Git的基本工作流程
![](http://49.234.236.217/tool_files/git-flow.png)

# git bash命令行模式的基本特点：
> * 简洁，迅速，高效

* git bash基础命令

> pwd(print working directory)查看当前所在路径--绝对路径
cd(change directory)切换目标
mkdir(make directory)创建目录
touhc创建文件
ls(list)查看当前目录下的内容
cat查看文件内容（一次性将内容全部显示）
clear清屏
q(quit)退出

Git有两种操作界面，命令型模式和图形界面模式，我们主要使用命令形模式。在Windows下我们安装好Git并点击Git Bash 图标启动Git之后会出现一个命令行窗口如下图所示：
![](http://49.234.236.217/tool_files/git-2.jpg)
* Git Bash命令行模式是使用的Linux系统命令行，所有和Window系统有一些差异，例如上图中/c/Users这个路径就和Window系统的下现实C:\Users路径显示略有不同,但实际上都是显示的同一个目录路径，实际上/c/Users=C:\Users.

# GitHub简介
> GitHub是什么？Github是一个基于it的代码托管平台，Github由Chris、Wanstrath，PJ Hyett与Tom Preston-Werner三位开发者在2008年4月创办。这个星球上最流行的开源托管服务，目前已托管上百万的git项目，很多知名开源下古墓迁入GitHub，比如Ruby on Rails、jQuery、Ruby、Erlang、OTP；今年流行的开源库往往在GitHub首发，例如：BootStrap、Node.js、CpffeScript等。
* 注册GitHub账号

[GitHub网址](https://github.com/)
![](http://49.234.236.217/tool_files/git-1.jpg)
* 首先我们登录GitHub官网按照提示一步一步申请免费的账号，并且初始化仓库
* 然后打开Git Bash 在命令行模式下通过cd命令进入对应目录，在下图我进入的桌面（Desktop）目录
![](http://49.234.236.217/tool_files/git1.png)
* 我们首先设置对应GitHub账号用户名和邮件
![](http://49.234.236.217/tool_files/git2.png)
> git config --global user.name 你自己的注册名
 git config --global user.email 你自己的注册邮箱
* 从远程GitHub仓库克隆刚刚初始化的项目
![](http://49.234.236.217/tool_files/git3.png)
> git clone https://github.com/你自己的仓库地址
* 进入科龙目录，然后当完成对文件的编辑保存好之后，我么先将修改后的文件添加到缓存区。
![](http://49.234.236.217/tool_files/git4.png)
> git add
git commit -m"代码提交的信息"

* 将提交的结果推送代码到远程GitHub仓库（在这个过程，系统会要求我们输入远程GitHub的账号和密码，按提示输入即可）
![](http://49.234.236.217/tool_files/git5.png)
> git push origin master


# Vue 简介
> Vue.js是现今三大流行前端框架之一（Angular.js，React.js，Vue.js）是一个只要拥有的html，css，javascript基础，就能很快学会的易用更灵活的用于构建用户界面的渐进式前端框架。

# Vue.js新手入门
* 使用Vue.js非常简单，在HTML页面中使用输出日破天标签导入Vue.js文件就可以了，如下例：
```
<!-- 可以通过CDN直接使用网上的资源 -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<!-- 也可以使用本地资源 -->
<script src="vue.js"></script>
```
* 接下来我们就可以来写一个Hello Vue.js!
```html
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
  * vue-demo.html HTML主体文件，vue.js Vue框架文件，main.js Vue实例文件
  ```html
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


  * Vue-demo.html
```js
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
* main.js

# Vue.js的语法特点
> 双括号｛｛｝｝语法，Vue.js通过｛｛｝｝来实现数据的渲染。
指令（Directives）是带有v-前缀的由Vue.js定义的特殊属性。例如：v-For，v-bind，v-show等等这些指令，除了Vue.js自带的属性，我们还可以自定义Vue指令。
el是Element的所写，而来属性对应的是Vue框架挂载在HTML中对应的视图
data是Vue实例的数据属性

# V-for指令
> 通过vfor指令来实现循环数组遍历，使用特定语法vfor='alias in expression',为当前遍历的元素提供别名，通常使用在ul或者ol标签中li选项中。
```html
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

```js
  var app = new Vue({
    el:'#app',
    data:{
        // foodList:['可乐','薯条','炸鸡']
        foodList:[
            {name:'可乐',price:3,discount:0.9},
            {name:'薯条',price:5,discount:0.8},
            {name:'炸鸡',price:10,discount:0},
        ]
    }
    })
```
* v-for.js
