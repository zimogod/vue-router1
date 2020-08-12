<template>
  <div class="homepage">
    homepage
    <!-- <router-link :to="{path:`/details/34`,query:{goodsId:1}}">商品1</router-link>
    <router-link :to="{path:`/details/56`,query:{goodsId:2}}">商品2</router-link> -->
     <div @click="goods1">商品1</div>
     <div @click="goods2">商品2</div>
     <loop :arr="arr"></loop>
  </div>
</template>

<script>
import loop from './client/xiangqing/loop';
export default {
  name: 'homepage',
  components:{
    loop
  },
  data(){
    return {
      arr:[5,6,7,8],
      
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
        query:{goodsId:4}
      })
    }
  },
  mounted(){
  //  this.$http.get(`http://localhost:3001/page?page=${}`).then(res=>{
  //    console.log(res.data.glist)
  //  })
  }
}
</script>

<style lang="less">
.homepage {
  a{
    display: block;
    text-decoration: none;
  }
  .van-swipe__indicators{
    width:100px;
  }
}
</style>
