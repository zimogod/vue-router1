<template>
  <div class="homepage">
    homepage
    <!-- <router-link :to="{path:`/details/34`,query:{goodsId:1}}">商品1</router-link>
    <router-link :to="{path:`/details/56`,query:{goodsId:2}}">商品2</router-link> -->
     <div @click="goods1">商品1</div>
     <div @click="goods2">商品2</div>
<!-- vant -->
     <!-- <loop :arr="arr"></loop> -->
<!-- element-ui -->
     <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import { detailsApi } from './server/api'
import loop from './client/xiangqing/loop';
export default {
  name: 'homepage',
  components:{
    loop
  },
  data(){
    return {
      arr:[5,6,7,8],
      tableData: []
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
    detailsApi.getTiger().then(res =>{
      this.tableData = res;
    })
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
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
}
</style>
