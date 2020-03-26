import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/utils/routerGuard.js'

// Initialization css
import '@/assets/css/normalize.css'
import '@/assets/css/index.scss' // global css

// 按需引用 element 组件
import {
  Dialog,
  Form,
  FormItem,
  Input,
  Button,
  Message,
  Menu,
  MenuItem,
  Row,
  Col,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Loading,
  Timeline,
  TimelineItem,
  Card,
  Tag,
  Pagination
} from "element-ui";

// Vue.component(Dialog.name, Dialog);
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(MenuItem)
Vue.use(Col)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(TimelineItem)
Vue.use(Card)
Vue.use(Tag)
Vue.use(Pagination)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
