<template>
  <main>
    <div class="nav_two">
      <div class="nav_two_ctn w">
        <ul>
          <router-link active-class="nav_two_active" tag="li" to="/Recommend">
            推荐
          </router-link>
          <router-link active-class="nav_two_active" tag="li" to="/Ranking">
            排行榜
          </router-link>
          <router-link active-class="nav_two_active" tag="li" to="/SongList">
            歌单
          </router-link>
          <router-link
            active-class="nav_two_active"
            tag="li"
            to="/AnchormanStation"
          >
            主播电台
          </router-link>
          <router-link active-class="nav_two_active" tag="li" to="/Singer">
            歌手
          </router-link>
          <router-link active-class="nav_two_active" tag="li" to="/NewDisc">
            新歌上架
          </router-link>
        </ul>
      </div>
    </div>
    <!-- 主页的内容 -->
    <!-- <fm-content /> -->
    <router-view></router-view>
  </main>
</template>

<script>
// import FmContent from "./FmContent.vue";
export default {
  name: "FoundMusic",
  components: {
    // FmContent,
  },
};
</script>

<style scoped>
.nav_two {
  width: 100%;
  height: 24px;
  box-sizing: border-box;
  background-color: #c20c0c;
  border-bottom: 1px solid #a40011;
  padding-bottom: 30px;
}
.nav_two_ctn {
  margin: auto;
  height: inherit;
  padding-left: 204px;
}
.nav_two_ctn ul {
  display: flex;
  align-items: center;
  height: inherit;
}
.nav_two_ctn ul li {
  font-size: 0.075rem;
  padding: 0px 10px;
  cursor: pointer;
  height: 25px;
  border-radius: 20px;
  color: #fff;
  line-height: 25px;
  margin-left: 30px;
}
.nav_two_active,
.nav_two_ctn ul li:hover {
  background: #9b0909;
}
</style>