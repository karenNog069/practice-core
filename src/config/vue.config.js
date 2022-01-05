import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueBus from 'vue-bus';


Vue.use(ElementUI);
Vue.use(VueBus);
/** 配置VUE */
export default {
    /** 初始化所有 */
    init() {
        Vue.config.productionTip = false;
        /** 我们可以再这个地方注入全局的组件，这样就不需要在每个页面单独的声明了 */
        Vue.use(ElementUI);
    }
}