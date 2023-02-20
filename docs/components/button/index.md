# Button 按钮
常⽤操作按钮
## 基础⽤法
基础的按钮⽤法
:::demo 使⽤`size`、`color`、`pain`、`round`、`circle`属性来定义 Button 的样式
```vue
<template>
  <div style="margin-bottom:20px;">
    <KindButton>默认按钮</KindButton>
    <KindButton type="primary">主要按钮</KindButton>
    <KindButton type="success">绿色按钮</KindButton>
    <KindButton type="info">灰色按钮</KindButton>
    <KindButton type="danger">黄色按钮</KindButton>
    <KindButton type="warning">红色按钮</KindButton>
  </div>
  <div style="margin-bottom:20px;">
    <KindButton plain>默认按钮</KindButton>
    <KindButton type="primary" plain>主要按钮</KindButton>
    <KindButton type="success" plain>绿色按钮</KindButton>
    <KindButton type="info" plain>灰色按钮</KindButton>
    <KindButton type="danger" plain>黄色按钮</KindButton>
    <KindButton type="warning" plain>红色按钮</KindButton>
  </div>
  <div style="margin-bottom:20px;">
    <KindButton round>默认按钮</KindButton>
    <KindButton type="primary" round>主要按钮</KindButton>
    <KindButton type="success" round>绿色按钮</KindButton>
    <KindButton type="info" round>灰色按钮</KindButton>
    <KindButton type="danger" round>黄色按钮</KindButton>
    <KindButton type="warning" round>红色按钮</KindButton>
  </div>
  <div style="margin-bottom:20px;">
    <KindButton plain round>默认按钮</KindButton>
    <KindButton type="primary" plain round>主要按钮</KindButton>
    <KindButton type="success" plain round>绿色按钮</KindButton>
    <KindButton type="info" plain round>灰色按钮</KindButton>
    <KindButton type="danger" plain round>黄色按钮</KindButton>
    <KindButton type="warning" plain round>红色按钮</KindButton>
  </div>
  <div style="margin-bottom:20px;">
    <KindButton circle>按</KindButton>
    <KindButton type="primary" circle>按</KindButton>
    <KindButton type="success" circle>按</KindButton>
    <KindButton type="info" circle>按</KindButton>
    <KindButton type="danger" circle>按</KindButton>
    <KindButton type="warning" circle>按</KindButton>
  </div>
  <div style="margin-bottom:20px;">
    <KindButton plain circle>按</KindButton>
    <KindButton type="primary" plain circle>按</KindButton>
    <KindButton type="success" plain circle>按</KindButton>
    <KindButton type="info" plain circle>按</KindButton>
    <KindButton type="danger" plain circle>按</KindButton>
    <KindButton type="warning" plain circle>按</KindButton>
  </div>
  <div style="margin-bottom:20px;">
    <KindButton disabled>默认按钮</KindButton>
    <KindButton type="primary" disabled>主要按钮</KindButton>
    <KindButton type="primary" icon="Kind-icon-edit" circle></KindButton>
  </div>
  </template>
  ```