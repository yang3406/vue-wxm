
const foo = {
    template:'<h1>this is foo {{$route.params.id}}{{name}}</h1>',
    //用的同一组件 不会再次触发钩子函数 用watch监控 或beforeRouteUpdate 监控
    watch:{
        $route(to,from){
          if(to.path.indexOf('idone')){
              this.name = 'cici'
          }else {
              this.name = 'bili'
          }
        }
    },
    data(){ return { name:'bili'}}

};
const bar = {template:'<h1>this is bar</h1>'};

const child = {
    template:'<div>' +
    '<h1>i am top2</h1>' +
    '<p>{{$route.params.sex}}</p>'+
    ' <router-view></router-view>' +
    '</div>',
}
const MM = {
    template:'<div>MM say she is beautiful</div>',
}
const GG = {
    template:'<div>GG say she is cool</div>',
}

const routes = [
    //动态路由
    {path:'/foo/:id',component:foo},
    {path:'/bar',component:bar},
    {
        path:'/child/:sex',
        component:child, //为放子路由视图 在child组件里面放一个<router-view></router-view>
        children:[{
            path:'say',  //子路由没有/ 以 / 开头的嵌套路径会被当作根路径。 这让你充分的使用嵌套组件而无须设置嵌套的路径
            component:MM
        },
        {
            path:'call',
            component:GG
        }
        ]
    }

];

Vue.use(VueRouter);

const router = new VueRouter({
    routes  //记住这里是routes 不是routers
})

new Vue({
    router
}).$mount("#app")