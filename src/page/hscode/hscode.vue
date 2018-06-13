<template>
  <div>
    <header-top goback="true">
      <li slot="title">HS编码列表</li>
      <li slot="serach"><a class="icon_search"><span></span></a></li>
    </header-top>

    <!--<nav-content>
         <li slot="no">商品编号</li>
         <li slot="name">商品名称</li>
         <li slot="union1">第一单位</li>
         <li slot="union2">第二单位</li>
    </nav-content>-->
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
      <ul class="query-list-outer-ul">
           <li class="query-list-outer-li under-line" v-for="item in hscodeList">
               <ul class="query-list-inner-ul">
                 <li>商品编号</li>
                 <li >{{item.hscodeNo}}</li>
                 <li>商品名称</li>
                 <li >{{item.gName}}</li>
                 <li class="gray-word">第一单位</li>
                 <li class="query-list-inner-li-inline gray-word">{{item.unitName1}}</li>
                 <li class="gray-word">第二单位</li>
                 <li class="query-list-inner-li-inline gray-word">{{item.unitName2}}</li>
               </ul>
           </li>
      </ul>
    </mt-loadmore>
  </div>
</template>

<script>
  import headerTop from '@/components/common/headerTop'
  import navContent from '@/components/common/navContent'
  import { Indicator,Loadmore} from 'mint-ui';
  import * as fetch from '@/fetch'

  export default {
    name: 'hocodeList',
    data() {
      return {
        hscodeList:[],
        allLoaded:false,
        pageNo:1,
        size:7
      }
    },
    components: {
      headerTop,
      navContent
    },
    mounted() {
      Indicator.open("加载中.....");
      this.loadData().then(() =>{
        Indicator.close();
      });
    },
    methods:{
      loadTop(){
        this.loadData().then( () => {
          this.allLoaded = false;
          this.$refs.loadmore.onTopLoaded();
        })
      },
      loadBottom(){
        this.allLoaded = true;// if all data are loaded
        this.loadMore().then( () =>{
          this.$refs.loadmore.onBottomLoaded();
        });

      },
      async loadData(){
        fetch.fetchHSCode({pageNo:1, size:this.size})
          .then(res => {
            if(res){
              this.hscodeList = res.list;
            }
          })
          .catch(error => {
            console.log(error)
          })
      },
      async loadMore(){
        this.pageNo ++;
        fetch.fetchHSCode({pageNo:this.pageNo, size:this.size})
          .then(res => {
            Indicator.close();
            if(res){
              console.log(res.list)
              this.hscodeList = this.hscodeList.concat(res.list);
              if(res.size.length == this.size){
                this.allLoaded = false
              }
            }
          })
          .catch(error => {
            Indicator.close();
            console.log(error)
          })
      }
    }
  }
</script>

<style>

</style>
