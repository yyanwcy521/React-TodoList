## Chrome的扩展工具
- React Developer Toods
-

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
- 8. 直接操作DOM，改变span中的内容

### DOM转换过程
- JSX -> createElement -> 虚拟DOM(JS对象) -> 真实DOM
```
React.createElement('div',{},'item');
```

### 优点
- 1. 性能提升
- 2. 跨端应用得以实现，React Native
   -  -  虚拟DOM可以在移动端和网页端