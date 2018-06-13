<template>
    <div class="header">
         <ul class="top_title">
           <li class="icon_back" v-if="goback" @click="$router.go(-1)"><span></span></li>
           <slot name="title"></slot>
           <slot name="serach"></slot>
           <slot name="detail"></slot>
         </ul>
    </div>
</template>

<script>
    export default {
      name:'headerTop',
      data(){
        return{

        }
      },
      props:['goback']
    }
</script>

<style>

</style>
