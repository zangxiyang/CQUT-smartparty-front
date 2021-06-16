import ElementPlus from 'element-plus'
import '@/assets/scss/element-variables.scss'
import locale from 'element-plus/lib/locale/lang/zh-cn'
// 引入Element自适应断点css
import 'element-plus/lib/theme-chalk/display.css';
import {App} from "vue";

export default (app: App): void => {
    app.use(ElementPlus, {locale})
}

