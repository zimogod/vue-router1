<template>
  <div class="page2">
      page2组件啊
      <div v-for="(item,index) in routes" :key="index">
          <div v-for="(item1,index1) in item.children" :key="index1">
            <router-link v-for="(item2,index2) in item1.children" 
          :to="{path:item1.path+'/'+item2.path}" :key="index2">{{ item2.alias }}</router-link>
          </div>
      </div>
      <section>
        <router-view></router-view>
      </section>
  </div>
</template>

<script>

export default {
  name: 'page2',
  data(){
    return {
      routes:this.$router.options.routes
    }
  }
}
</script>

<style lang="less">
.page2 {
  
}
</style>
