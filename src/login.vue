<template>
  <div class="login">
      登录
      <router-link to="/">home组件</router-link>
      <!-- 声明式跳转 -->
      <!-- <router-link to="/page1">page1组件</router-link> -->
        <span @click="goPage1">ggg</span>
  </div>
</template>

<script>
export default {
  name: 'login',
  data(){
    return {
     
    }
  },
  methods:{
      goPage1(){
    // 1
        //   this.$router.push('/page1')
    // 2
        // this.$router.push({
        //     path:'/page1'
        // })
    // 3
        this.$router.push({
            path:'/page1',
            query:{
                id:'1'
            }
        })
    // 4
        // this.$router.push({
        //     name:'page1',
        //     query:{
        //         id:'1'
        //     }
        // })
      }
  },
  mounted(){
    
  }
}
</script>

<style lang="less">
.login {
  a{
    display: block;
    text-decoration: none;
  }
}
</style>
