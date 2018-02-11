import App from '../App.vue'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')

export default [{
      path: '/',
      component: App, //顶层路由，对应index.html
      children:[
        // 路由为空跳转 至首页
        {
          path: '',
          redirect: '/home'
        },{
          path: '/home',
          name: 'home',
          component: home,
          meta: {keepAlive:true}
        }

      ]
    }
]
