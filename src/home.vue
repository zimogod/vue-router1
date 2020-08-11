<template>
  <div class="home">
    <router-link to='/admin'>404</router-link>
      home组件啊
      <!-- 导航 -->
      <div v-for="(item,index) in routes" :key="index">
          <router-link v-for="(items,index1) in item.children" 
          :to="{path:items.path}" :key="index1">{{ items.alias }}</router-link>
      </div>
      <!-- http://localhost:8080/admin/zimo/ -->
      <!-- 导航的组件显示容器 -->
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'home',
  data(){
    return {
      routes:this.$router.options.routes
    }
  },
  mounted(){
    // console.log(this)
    // console.log(this.$router.options.routes)
  }
}
</script>

<style lang="less">
.home {
  a{
    display: block;
    text-decoration: none;
  }
}
</style>
