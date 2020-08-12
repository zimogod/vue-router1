<template>
  <div class="homepage">
    homepage
    <!-- <router-link :to="{path:`/details/34`,query:{goodsId:1}}">商品1</router-link>
    <router-link :to="{path:`/details/56`,query:{goodsId:2}}">商品2</router-link> -->
     <div @click="goods1">商品1</div>
     <div @click="goods2">商品2</div>
  </div>
</template>

<script>
export default {
  name: 'homepage',
  data(){
    return {
      // param:this.$route.params
    }
  },
  methods:{
    goods1(){
      // http://localhost:8080/details/34?goodsId=1
      // http://localhost:8080/details/34
      this.$router.push({
        name:'details',
        params:{info:34},
        query:{goodsId:1}
      })
    },
    goods2(){
      this.$router.push({
        name:'details',
        params:{info:56},
        query:{goodsId:2}
      })
    }
  },
  mounted(){
   
  }
}
</script>

<style lang="less">
.homepage {
  a{
    display: block;
    text-decoration: none;
  }
}
</style>
