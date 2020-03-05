## 改造计划
1、不用 iframe，直接把 main.js 作为一个 ARView 导出，全部封装到局部，避免污染全局
    a. sendParentMessage去除
2、不用全局页面，在固定DOM 里渲染，操作事件绑定在固定 DOM 上，使一个页面可以有多个全景





## 代码关键点
1、hotspot body 绑定的事件
2、main.js
    a、iframe
    b、window load
3、world-renderer.js 里的 window.innerWidth


## 分支说明

master 分支不动
wxb-vrview 按自己思路，工作需求修改库
feature 试验某个功能的分支
