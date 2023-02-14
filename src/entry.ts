//入口
//1.导出全部组件
//2.实现一个vue插件，插件中编写install方法，将所有组件安装到vue实例中
import { App } from "vue";
import MyButton from "./button";
import SFCButton from "./SFCButton.vue";
import JSXButton from "./JSXButton";

//导出单独组件
export { MyButton, SFCButton, JSXButton };

//编写一个插件，实现一个install方法
export default {
    install(app: App): void {
        app.component(MyButton.name, MyButton);
        app.component(SFCButton.name, SFCButton);
        app.component(JSXButton.name, JSXButton);
    }
}