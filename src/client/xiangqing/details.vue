<template>
  <div class="details">
      <div v-if="param == 34"> 商品1 --的params为：{{ param }}--的query为：{{ quer }}</div>
      <div v-else> 商品2啊 --的params为：{{ param }}--的query为：{{ quer }} </div>
   
      <loop></loop>
  </div>
</template>

<script>
import loop from './loop';
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
    this.$http.get(`http://localhost:3001/page?page=${this.quer}`).then(res=>{
     console.log(res.data.glist)
    })
    this.$http.get('http://api.cms.liulongbin.top/api/getnewslist').then(res=>{
      console.log(res.data.message)
    })
  }
}
</script>

<style lang="less">
.details {
  
}
</style>
