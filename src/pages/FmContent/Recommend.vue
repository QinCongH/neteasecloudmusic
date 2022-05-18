<template>
  <!-- 推荐 -->
  <div class="recommend">
    <banner />
    <div class="rd-content w">
      <el-row>
        <el-col :span="18">
          <div class="rd-left">
            <div class="hot-recommend">
              <!-- 热门推荐 -->
              <div class="rd-head">
                <div class="rd-head-lf">
                  <div class="hollow"><!--空心圆--></div>
                  <div class="rd-title">
                    <h1><a href="javascript:;"> 热门推荐 </a></h1>
                  </div>
                  <div class="rd-nav">
                    <ul>
                      <li>华语</li>
                      <li></li>
                      <li>流行</li>
                      <li></li>
                      <li>摇滚</li>
                      <li></li>
                      <li>民谣</li>
                      <li></li>
                      <li>电子</li>
                    </ul>
                  </div>
                </div>
                <div class="rd-head-rt">
                  <div class="rd-more">
                    <a href="javascript:;">
                      更多
                      <i class="index-img"> </i>
                    </a>
                  </div>
                </div>
              </div>
              <!-- 内容 -->
              <div class="rd-left-content">
                <el-row :gutter="50">
                  <el-col :span="6" v-for="i in 8" :key="i">
                    <div class="rd-ct">
                      <div class="rd-ct-img">
                        <img
                          src="https://p1.music.126.net/f8h1rFWuVD55H_1K2trcvg==/109951167424964887.jpg?param=140y140"
                          alt=""
                        />
                        <div class="rd-ct-layer">
                          <div class="df df-ai">
                            <svg
                              t="1652710637471"
                              class="icon"
                              viewBox="0 0 1024 1024"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              p-id="2865"
                              width="15"
                              height="15"
                            >
                              <path
                                d="M880 712c-9.6 0-16-6.4-16-16v-129.6c0-193.6-156.8-350.4-350.4-350.4H512h-1.6c-92.8 0-180.8 35.2-246.4 100.8-67.2 65.6-104 153.6-104 246.4v131.2c0 9.6-6.4 16-16 16s-16-6.4-16-16v-132.8c0-102.4 40-198.4 113.6-268.8 72-72 168-110.4 268.8-110.4h1.6l1.6 16v-16c211.2 1.6 382.4 172.8 382.4 384v129.6c0 9.6-6.4 16-16 16z"
                                fill="#ffffff"
                                p-id="2866"
                              ></path>
                              <path
                                d="M193.6 872h-4.8c-33.6 0-62.4-27.2-62.4-60.8V628.8c0-33.6 27.2-60.8 62.4-60.8h4.8c33.6 0 62.4 27.2 62.4 60.8v180.8c0 35.2-27.2 62.4-62.4 62.4z m-3.2-272c-16 0-30.4 12.8-30.4 28.8v180.8c0 16 12.8 28.8 30.4 28.8h4.8c16 0 30.4-12.8 30.4-28.8V628.8c0-16-12.8-28.8-30.4-28.8h-4.8z"
                                fill="#ffffff"
                                p-id="2867"
                              ></path>
                              <path
                                d="M144 798.4c-1.6 0-4.8 0-6.4-1.6l-64-30.4c-6.4-3.2-9.6-8-9.6-14.4v-97.6c0-6.4 4.8-12.8 11.2-16l64-20.8c4.8-1.6 9.6 0 14.4 1.6 4.8 3.2 6.4 8 6.4 12.8v148.8c0 4.8-3.2 11.2-8 12.8-1.6 3.2-4.8 4.8-8 4.8z m-48-56l32 14.4v-102.4l-32 11.2v76.8zM880 798.4c-3.2 0-6.4-1.6-8-3.2-4.8-3.2-8-8-8-12.8v-148.8c0-4.8 3.2-9.6 6.4-12.8 4.8-3.2 9.6-3.2 14.4-1.6l64 20.8c6.4 1.6 11.2 8 11.2 16v96c0 6.4-3.2 11.2-9.6 14.4l-64 30.4c-1.6 0-4.8 1.6-6.4 1.6z m16-144v102.4l32-14.4v-76.8l-32-11.2z m48 97.6z"
                                fill="#ffffff"
                                p-id="2868"
                              ></path>
                              <path
                                d="M835.2 872h-4.8c-33.6 0-60.8-27.2-60.8-60.8V628.8c0-33.6 27.2-60.8 60.8-60.8h4.8c33.6 0 60.8 27.2 60.8 60.8v180.8c0 35.2-27.2 62.4-60.8 62.4z m-6.4-272c-16 0-28.8 12.8-28.8 28.8v180.8c0 16 12.8 28.8 28.8 28.8h4.8c16 0 28.8-12.8 28.8-28.8V628.8c0-16-12.8-28.8-28.8-28.8h-4.8z"
                                fill="#ffffff"
                                p-id="2869"
                              ></path>
                            </svg>
                            <span>
                           2000万
                            </span>
                          </div>
                          <div class="df df-ai">
                            <svg t="1652711117541" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3706" width="15" height="15"><path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 981.333333C253.866667 981.333333 42.666667 770.133333 42.666667 512S253.866667 42.666667 512 42.666667s469.333333 211.2 469.333333 469.333333-211.2 469.333333-469.333333 469.333333z" p-id="3707" fill="#ffffff"></path><path d="M672 441.6l-170.666667-113.066667c-57.6-38.4-106.666667-12.8-106.666666 57.6v256c0 70.4 46.933333 96 106.666666 57.6l170.666667-113.066666c57.6-42.666667 57.6-106.666667 0-145.066667z" p-id="3708" fill="#ffffff"></path></svg>
                          </div>
                        </div>
                      </div>
                      <div class="rd-ct-text">
                          <p>
                            11111111111111111
                          </p>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>
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
export default {
  name: "recommend",
  components: {
    Banner,
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
.rd-head,
.rd-head-lf,
.rd-nav ul {
  display: flex;
  align-items: center;
}
.rd-head {
  padding: 7px 0px;
  border-bottom: 2px solid #c2100f;
  justify-content: space-between;
}
.rd-head-lf {
  width: 50%;
  justify-content: space-between;
}
.hollow {
  width: 16px;
  height: 16px;
  background: #cd3b3b;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hollow::after {
  content: "";
  display: block;
  width: 8px;
  height: 8px;
  background-color: #fff;
  border-radius: 50%;
  transform: scale(0.9);
}
.rd-title {
  font-size: 20px;
}
.rd-title h1,
.rd-title a {
  color: #333;
}
.rd-nav ul li:nth-of-type(2n) {
  width: 1px;
  height: 10px;
  background: #d3d3d3;
}
.rd-nav ul li {
  margin: 0px 7px;
  color: #666;
  font-size: 13px;
  cursor: pointer;
}
.rd-more a {
  color: #666;
  font-size: 13px;
}
.rd-more i {
  display: inline-block;
  width: 12px;
  height: 12px;
  vertical-align: middle;
  background-position: 0 -240px;
}
.rd-left-content{
  margin-top: 25px;
}
.rd-ct {
  width: 100%;
}
.rd-ct > .rd-ct-img {
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
}
.rd-ct-layer {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 27px;
  line-height: 27px;
  background: rgb(51 51 51 / 68%);
}
.rd-ct > .rd-ct-img > img {
  max-width: 100%;
  width: 100%;
}
.rd-ct-layer{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 5px;
}
.rd-ct-layer div:nth-of-type(1)> span{
  color: #aaa9a8;
  line-height: 27px;
  font-size: 14px;
  margin-left: 5px;
  display: inline-block;
}
.rd-ct-layer div:nth-of-type(2)>svg{
  cursor: pointer;
}
.rd-ct-layer div:nth-of-type(1)>svg path,.rd-ct-layer div:nth-of-type(2)>svg path{
  fill: #aaa9a8;
  
}
.rd-ct-layer div:nth-of-type(2)>svg path:hover{
  fill: rgb(255, 255, 255);
}
.rd-ct-text{
  width: 100%;
  padding-top: 6px;
  font-size: 14px;
  height: 50px;
}
.rd-ct-text p{
    display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
/* //当p标签中有数字使多行显示失效时： */
  word-wrap: break-word;
  word-break: break-all;
}
</style>