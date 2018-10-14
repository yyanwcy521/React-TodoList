## Chrome的扩展工具
- React Developer Toods
- Redux DevToods

## React性能提升
- 1. state 数据
- 2. JSX模板
- 3. 数据+模板结合,生成虚拟DOM(虚拟DOM就是一个JS对象，来描述真是的DOM) 
```
['div',{id:"abc"},{"span",{},"hello world"}]
```
- 4. 用虚拟DOM的结构生成真实的DOM来显示
```
<div id='abc'><span>hello world</span></div>
```
- 5. state变化
- 6. 数据+模板 生成虚拟的DOM (极大的提升了性能)
```
['div',{id:"abc"},{"span",{},"bye bye"}]
```
- 7. 比较原始虚拟DOM和新的虚拟DOM的叙别，找到span中的内容
Diff算法,key值
- 8. 直接操作DOM，改变span中的内容

### DOM转换过程
- JSX -> createElement -> 虚拟DOM(JS对象) -> 真实DOM
```
React.createElement('div',{},'item');
```

### 优点
- 1. 性能提升
- 2. 跨端应用得以实现，React Native
    -  虚拟DOM可以在移动端和网页端

### Redux
- store 是唯一的
- 只有store能够改变自己的内容,reducer不能
- reducer必须是纯函数
- API
```
createStore
store.dispatch
store.getState
store.subscribe
```
### 中间件
- redux-thunk
- redux-saga

### 第三方的模块
- React-Redux
API Provider
- 样式模块
styled-components  reset-css 复制代码 匹配各个浏览器
iconfont.cn

### 动画模块
- react-transition-group