<template>
  <div class="loop">
    <van-swipe class="my-swipe" :autoplay="1000" indicator-color="black">
      <van-swipe-item v-for="(item,index) in arr" :key="index">{{ item }}</van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>

export default {
  name: 'loop',
  props:['arr'],
  data(){
    return {
        
    }
  },
  mounted(){
    
  }
}
</script>
<style>
.van-swipe__indicator{
    width:100px;
}
</style>

<style lang="less">
.loop {
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
}
</style>
