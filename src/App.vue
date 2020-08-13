<template>
  <div id="app">
    <!-- 显示容器 -->
    <router-view/>
  </div>
</template>

<script>
import { detailsApi } from './server/api';
export default {
  name: 'App',
  data(){
    return {
      userInfo:'ffgg',
      token:''
    }
  },
  created(){
    // window.localStorage.setItem('token',JSON.stringify(this.token));
    window.localStorage.setItem('user',JSON.stringify(this.userInfo));
  },
  mounted(){
    detailsApi.getToken().then(res =>{
      this.token = res;
      window.localStorage.setItem('token',JSON.stringify(this.token));
    })
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
