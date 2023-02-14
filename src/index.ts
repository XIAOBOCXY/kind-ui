const s: string = 'Hello Typescript'
console.log(s)

// 启动vue实例
import { createApp } from "vue";

// import SButton from "./button";
// createApp(SButton).mount("#app");


// import SFCButton from "./SFCButton.vue";
// createApp(SFCButton).mount("#app");

// import JSXButton from "./JSXButton";
// createApp(JSXButton).mount("#app");

import SmartyUI from "./entry";
createApp({
    template: `
        <div>
            <SButton>普通按钮</SButton>
        </div>
    `
})
    .use(SmartyUI)
    .mount("#app");
