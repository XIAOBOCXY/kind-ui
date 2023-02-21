//入口
//1.导出全部组件
//2.实现一个vue插件，插件中编写install方法，将所有组件安装到vue实例中
import { App } from "vue";
import button from "./button";
import "./assets/fonts/iconfont.css";//图标
import SkyIcon from "./icon";//图标
import SkyButtongroup from "./buttongroup";

//导出单独组件
export { button };

//编写一个插件，实现一个install方法
export default {
    install(app: App): void {
        app.component(button.name, button);//按钮
        app.component(SkyIcon.name, SkyIcon);//按钮
        app.component(SkyButtongroup.name, SkyButtongroup);//按钮组
    }
}