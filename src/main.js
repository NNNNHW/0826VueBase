// import Vue from 'vue'//默认版本，不带解析器
import Vue from 'vue/dist/vue.esm.js'//這是帶解析的版本
import App from '@/App'

// 这个写法默认导入的Vue是一个runtime-only版本的Vue，这个版本的Vue不带解析器
// new Vue({
//     el:'#app',
//     components:{
//         App,
//     },
//     template:'<App />'
// })

/*
    使用render函数，为什么就可以使用runtime-only版本的vue
    render函数功能：
        1.定义并注册了App
        2.使用了App组件
        3.比上面的写法多干了一件事，就是寻找解析器的loader
 */
// 以后都是用这种，下面的打包出来的项目体积小
new Vue({
    el:'#app',
    render:h => h(App)
})