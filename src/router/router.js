import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const hscode = r => require.ensure([], () => r(require('../page/hscode/hscode')), 'hscode')

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
        },
        {
          path:'/hsCode/hsCodeList',
          component:hscode
        }

      ]
}]

