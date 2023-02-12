const s: string = 'Hello Typescript'
console.log(s)

// 启动vue实例
import { createApp } from "vue";

import SButton from "./button";
createApp(SButton).mount("#app");


import SFCButton from "./SFCButton.vue";
createApp(SFCButton).mount("#app");

import JSXButton from "./JSXButton";
createApp(JSXButton).mount("#app");