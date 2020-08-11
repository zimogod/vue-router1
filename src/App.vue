<template>
  <div id="app">
    <!-- 显示容器 -->
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      userInfo:'ffgg'
    }
  },
  created(){
    window.localStorage.setItem('user',JSON.stringify(this.userInfo));
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
