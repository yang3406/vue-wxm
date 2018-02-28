
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

//非编程式路由通过 $route.params.sex获取值
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
//编程式路由通过 $route.query.id获取值 通过什么传过来的的 就用什么去取
const programRoute = {
  template:"<div>this is programRoute {{$route.query.id}}</div>"
}

//命名式路由 通过params传过来的值 可以通过$route.params.id来取
const nameRouter = {
  template:"<div>这是一个命名式路由{{$route.params.id}}</div>"
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
    },
  //编程式路由
  {path:'/programRoute',component:programRoute},
  //命名式路由 加不加/:id=路径会不会显示
  {path:'/nameRouter/:id',name:'nameRouter',component:nameRouter}

];

Vue.use(VueRouter);

const router = new VueRouter({
    routes  //记住这里是routes 不是routers
})

new Vue({
    router,
    data(){
      return {
        id:111,
      }
    },
    methods:{
      //编程式路由 有没有/感觉没啥影响
      programRoute(){
        //this.$router.push("programRoute")
        //this.$router.push({path:'/programRoute?id'+ this.id}) //等价下面的
        //this.$router.push({path:'programRoute',query:{id:this.id}})
        //注意如果提供了path params将会被忽略 下面的params将不会生效 上面的query生效
        // 同样的规则也适用于 router-link 组件的 to 属性。
        //this.$router.push({path:'programRoute',params:{id:this.id}})
        //在2.2中可选的在 router.push 或 router.replace 中提供 onComplete 和 onAbort 回调作为第二个和第三个参数
        //router.replace/go/push(location, onComplete?, onAbort?) router.replace和push很像
        // 但是它不会增加新的history记录 回退不会再进入这个页面
        this.$router.replace({path:'programRoute',query:{id:this.id}},function () {
            alert("234")
        }),function () {
          alert("789")
        }
      },
      nameRouter(){
        this.$router.push({name:'nameRouter',params:{id:this.id}})
      }
    }
}).$mount("#app")
