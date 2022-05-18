<template>
  <!-- 推荐 -->
  <div class="recommend">
    <banner />
    <div class="rd-content w">
      <el-row>
        <el-col :span="18">
          <div class="rd-left">
            <!-- 热门推荐 -->
            <hot-recommend></hot-recommend>
            <button @click="getsearch">搜素</button>
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
  components: {
    Banner,
    HotRecommend,
  },
  methods: {
    getsearch() {
      this.$api
        .getSearch({
          keywords: "海阔天空",
        })
        .then((res) => {
          console.log(res);
        });
    },
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