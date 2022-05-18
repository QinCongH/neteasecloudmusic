<template>
  <header>
    <div>
      <div class="he_header w">
        <div class="logo bg_img">
          <a href="javascript:;"> </a>
        </div>
        <nav>
          <ul>
            <router-link
              to="/"
              tag="li"
              :class="{
                active:
                  $route.path === '/' || $route.meta.belong === 'FoundMusic',
              }"
            >
              <a href="javascript:;"> 发现音乐 </a>
            </router-link>
            <router-link to="/MyMusic" tag="li" active-class="active">
              <a href="javascript:;"> 我的音乐 </a>
            </router-link>
            <router-link to="/Attention" tag="li" active-class="active">
              <a href="javascript:;"> 关注 </a>
            </router-link>
            <router-link to="/Download" tag="li" active-class="active">
              <a href="javascript:;"> 下载客户端 </a>
              <sup class="bg_img"> </sup>
            </router-link>
          </ul>
        </nav>
        <div class="he_right">
          <div class="search">
            <input
              class="bg_img"
              type="text"
              placeholder="音乐/视频/电台/用户"
            />
          </div>
          <div class="creator">
            <span> 创作者中心 </span>
          </div>
          <div class="login">
            <a href="javascript:;"> 登录 </a>
          </div>
        </div>
      </div>
      <div class="he_line"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeHeader",
};
</script>

<style scoped>
header {
  width: 100%;
}
header > div {
  height: 75px;
  background-color: #242424;
  border-bottom: 1px solid #000;
}
.he_line {
  height: 5px;
  background: #c20c0c;
  width: 100%;
}
.he_header {
  height: 70px;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: flex-start;
  flex-flow: row wrap;
  overflow: auto;
}
.logo {
  width: 17%;
  height: inherit;
  background-position: 0% 0%;
}
.logo a {
  display: block;
  width: 100%;
  height: inherit;
}
.he_header nav {
  flex: 1;
  /* width: 63%; */
}
.he_header nav ul {
  width: 100%;
  display: flex;
  justify-content: start;
}
.he_header nav ul > li {
  width: 25%;
  text-align: center;
  height: 70px;
  line-height: 70px;
  outline-color: none;
}
.he_header nav ul > li:nth-child(4) {
  position: relative;
}
.he_header nav ul > li:nth-child(4) sup {
  background-position: -190px 0;
  background-repeat: no-repeat;
  width: 28px;
  height: 19px;
  display: block;
  position: absolute;
  z-index: 333;
  top: 9px;
  right: 0px;
}
.he_header nav ul > li a {
  color: #ccc;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  outline: none;
  display: block;
}
.he_header nav ul > li a:hover {
  background: #000;
  color: #fff;
}
.active {
  background: #000;
  position: relative;
  text-align: center;
}
.active a {
  color: #fff !important;
}
.active::after {
  content: "";
  display: block;
  position: absolute;
  margin: auto;
  width: 0px;
  height: 0px;
  border: 6px solid transparent;
  border-bottom-color: #c20c0c !important;
  top: 58px;
  left: 45%;
}
.he_right {
  width: 37%;
  height: 70px;
  display: flex;
  justify-content: end;
}
.search > input {
  margin-top: 19px;
  background-position: 0 -99px;
  background-color: #fff;
  border-radius: 32px;
  height: 32px;
  padding-left: 32px;
  font-size: 10px;
}
.creator {
  width: 90px;
  height: 32px;
  margin: 19px 0 0 12px;
  box-sizing: border-box;
  padding-left: 16px;
  border: 1px solid #4f4f4f;
  background-position: 0 -140px;
  line-height: 33px;
  color: #ccc;
  border-radius: 20px;
  font-size: 10px;
  cursor: pointer;
}
.creator:hover {
  border-color: #fff;
  color: #fff;
}
.login a {
  display: block;
  width: 60px;
  line-height: 70px;
  text-align: center;
  font-size: 10px;
  color: #787878;
}
.login a:hover {
  color: #666;
}
</style>