<template>
  <div class="page1">
      page1组件啊
  </div>
</template>

<script>

export default {
  name: 'page1',
  mounted(){
    console.log(this.$route.query.id)
  }
}
</script>

<style lang="less">
.page1 {
  
}
</style>
