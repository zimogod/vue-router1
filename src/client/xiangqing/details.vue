<template>
  <div class="details">
      <div v-if="param == 34"> 商品1 --的params为：{{ param }}--的query为：{{ quer }}</div>
      <div v-else> 商品2啊 --的params为：{{ param }}--的query为：{{ quer }} </div>
  </div>
</template>

<script>

export default {
  name: 'detailsa',
  data(){
    return {
      param:this.$route.params.info,
      quer:this.$route.query.goodsId
    }
  },
  mounted(){
    // 后台获取到不同的params参数，返回给前端不同的数据，前端展示到页面上
    // this.$http.post('http://localhost:8080/details/随机参数',{params:param}).then(res=>{

    // })
  }
}
</script>

<style lang="less">
.details {
  
}
</style>
