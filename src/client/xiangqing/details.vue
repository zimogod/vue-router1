<template>
  <div class="details">
      <div v-if="param == 34"> 商品1 --的params为：{{ param }}--的query为：{{ quer }}</div>
      <div v-else> 商品2啊 --的params为：{{ param }}--的query为：{{ quer }} </div>
   
      <loop></loop>
  </div>
</template>

<script>
import loop from './loop';
import { detailsApi } from '../../server/api';
export default {
  name: 'detailsa',
  components:{
    loop
  },
  data(){
    return {
      param:this.$route.params.info,
      quer:this.$route.query.goodsId
    }
  },
  mounted(){
    // 后台获取到不同的params参数，返回给前端不同的数据，前端展示到页面上
    detailsApi.getNewsList().then(res =>{
      console.log(res,'000')
    })
    detailsApi.getPageData(this.quer).then(res =>{
      console.log(res,'111')
    })
  }
}
</script>

<style lang="less">
.details {
  
}
</style>
