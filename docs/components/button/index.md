# Button 按钮
常⽤操作按钮
## 基础⽤法
基础的函数⽤法
:::demo 使⽤`size`、`color`、`pain`、`round`、`circle`属性来定义 Button 的样式。
```vue
<template>
<div style="margin-bottom:20px;">
 <SButton color="blue">主要按钮</SButton>
 <SButton color="green">绿⾊按钮</SButton>
 <SButton color="gray">灰⾊按钮</SButton>
 <SButton color="yellow">⻩⾊按钮</SButton>
 <SButton color="red">红⾊按钮</SButton>
 <SButton color="pink">粉色按钮</SButton>
 <SButton color="purple">紫色按钮</SButton>
</div>
<div style="margin-bottom:20px;">
 <SButton color="blue" plain>朴素按钮</SButton>
 <SButton color="green" plain>绿⾊按钮</SButton>
 <SButton color="gray" plain>灰⾊按钮</SButton>
 <SButton color="yellow" plain>⻩⾊按钮</SButton>
 <SButton color="red" plain>红⾊按钮</SButton>
 <SButton color="purple" plain>紫⾊按钮</SButton>
</div>
<div style="margin-bottom:20px;">
 <SButton size="small" plain>⼩按钮</SButton>
 <SButton size="medium" plain>中按钮</SButton>
 <SButton size="large" plain>⼤按钮</SButton>
</div>
<div style="margin-bottom:20px;">
 <SButton color="blue" round plain icon="search">搜索按钮</SButton>
 <SButton color="green" round plain icon="edit">编辑按钮</SButton>
 <SButton color="gray" round plain icon="check">成功按钮</SButton>
 <SButton color="yellow" round plain icon="message">提示按钮</SButton>
 <SButton color="red" round plain icon="delete">删除按钮</SButton>
</div>
<div style="margin-bottom:20px;">
 <SButton color="blue" round plain icon="search"></SButton>
 <SButton color="green" round plain icon="edit"></SButton>
 <SButton color="gray" round plain icon="check"></SButton>
 <SButton color="yellow" round plain icon="message"></SButton>
 <SButton color="red" round plain icon="delete"></SButton>
</div>
<div style="margin-bottom:20px;">
 <SButton color="blue" round icon="search">搜索按钮</SButton>
 <SButton color="green" round icon="edit">编辑按钮</SButton>
 <SButton color="gray" round icon="check">成功按钮</SButton>
 <SButton color="yellow" round icon="message">提示按钮</SButton>
 <SButton color="red" round icon="delete">删除按钮</SButton>
</div>
<div style="margin-bottom:20px;">
 <SButton color="blue" circle icon="search"></SButton>
 <SButton color="green" circle icon="edit"></SButton>
 <SButton color="gray" circle icon="check"></SButton>
 <SButton color="yellow" circle icon="message"></SButton>
 <SButton color="red" circle icon="delete"></SButton>
</div>
</template>
```
:::
## 图标按钮
带图标的按钮可增强辨识度（有⽂字）或节省空间（⽆⽂字）。
:::demo 设置 icon 属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在⽂字右边的 icon ，只要使⽤ i 标签即可，可以使⽤⾃定义图标。
```vue
<template>
<div class="flex flex-row">
 <SButton icon="edit" plain></SButton>
 <SButton icon="delete" plain></SButton>
 <SButton icon="share" plain></SButton>
 <SButton round plain icon="search">搜索</SButton>
</div>
</template>
```