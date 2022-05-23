<template>
  <!-- 推荐 -->
  <div class="recommend">
    <banner :homeMsgList="homeBannarList"/>
    <div class="rd-content w">
      <el-row>
        <el-col :span="18">
          <div class="rd-left">
            <!-- 热门推荐 -->
            <hot-recommend></hot-recommend>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="rd-right">1</div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Banner from "../../components/FoundMusic/Banner.vue";
import HotRecommend from "../../components/Recommend/hot-recommend.vue";
export default {
  name: "recommend",
  data() {
    return {
      homeBannarList: [], //背景图片
    };
  },
  components: {
    Banner,
    HotRecommend,
  },
  methods: {
    // 获取数据
   getHomeMsg() {
      this.$api.getHomeMessage().then(res=>{
        let arr = res.data.data.blocks[0].extInfo.banners;
        // console.log(arr);
          arr = arr.filter((item, index, arr) => {
          return item.song != null;
        });
        this.homeBannarList= arr.map((item, index, arr) =>{
            if(item.pic){
              return item.pic
            }
        })
        console.log(this.homeBannarList)
      })


    },
  },
  created() {
    this.getHomeMsg();
  },
};
</script>

<style scoped>
.rd-content {
  margin: auto;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
}
.rd-left {
  padding: 20px 20px 40px;
}
</style>