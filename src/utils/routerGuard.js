import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import getPageTitle from './get-page-title'
NProgress.configure({ showSpinner: false }) // NProgress Configuration
import router from '../router'
// 全局前置守卫

router.beforeEach(async (to, from, next) => {
    // start progress bar
    NProgress.start()
    // set page title
    console.log('form', from)
    document.title = getPageTitle(to.meta.title)
    next()
})

router.afterEach(() => {
    NProgress.done()
})