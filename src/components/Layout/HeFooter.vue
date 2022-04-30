<template>
  <footer>
    <div class="he_footer w">
      <div class="hf_left">
        <div>
          <ul>
            <li>服务条款</li>
            <li></li>
            <li>隐私策略</li>
            <li></li>
            <li>儿童隐私策略</li>
            <li></li>
            <li>版权投诉</li>
            <li></li>
            <li>投诉者关系</li>
            <li></li>
            <li>广告合作</li>
            <li></li>
            <li>廉政举报</li>
            <li></li>
            <li>联系我们</li>
          </ul>
        </div>
        <div>
          <span> 网易公司版权所有©1997-2022 </span>
          <span> 杭州乐读科技有限公司运营： </span>
          <span> 浙网文[2021] 1186-054号 </span>
        </div>
        <div>
          <span>粤B2-20090191-18 工业和信息化部备案管理系统网站 </span>
          <span> </span>
          <span>浙公网安备 33010902002564号</span>
        </div>
      </div>
      <div class="hf_right">
        <ul>
          <li>
            <a href="javascript:;" class="ft_img"> </a>
            <p>Amped studio</p>
          </li>
          <li>
            <a href="javascript:;" class="ft_img"></a>
            <p>用户认证</p>
          </li>
          <li>
            <a href="javascript:;" class="ft_img"> </a>
            <p>独立音乐人</p>
          </li>
          <li>
            <a href="javascript:;" class="ft_img"> </a>
            <p>赞赏</p>
          </li>
          <li>
            <a href="javascript:;" class="ft_img"> </a>
            <p>视频奖励</p>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "HeFooter",
};
</script>

<style lang="css" scoped>
footer {
  height: 172px;
  width: 100%;
  border-top: 1px solid #d3d3d3;
  background: #f2f2f2;
}
.he_footer {
  margin: auto;
  height: inherit;
  display: flex;
  justify-content: center;
}
.hf_left > div:nth-child(1) {
  margin-top: 15px;
}
.hf_left > div:nth-child(1) ul {
  display: flex;
  align-items: center;
}
.hf_left > div:nth-child(1) ul li {
  font-size: 12px;

  color: #666666;
}
.hf_left > div:nth-child(2) span,
.hf_left > div:nth-child(3) span {
  color: #333333;
  font-size: 12px;
}
.hf_left > div:nth-child(3) span:nth-child(2) {
  width: 14px;
  height: 14px;
  background: url("../../assets/img/police.png") no-repeat;
  background-size: cover;
  display: inline-block;
  margin-right: 2px;
  vertical-align: -2px;
}
.hf_left > div:nth-child(1) ul li:nth-of-type(2n) {
  width: 1px;
  height: 13.5px;
  background: #c2c2c2;
  margin: 0px 7px;
}
.hf_right ul {
  width: 420px;
  display: flex;
  margin-top: 33px;
}
.hf_right ul li {
  width: 60px;
  height: 70px;
  margin-left: 30px;
}
.hf_right ul li a {
  display: block;
  width: 50px;
  height: 45px;
  margin: 0 auto;
}
.hf_right ul li:nth-child(1) a {
  background-position: -63px -456.5px;
}
.hf_right ul li:nth-child(2) a {
  background-position: -63px -101px;
}
.hf_right ul li:nth-child(3) a {
  background-position: 0 0;
}
.hf_right ul li:nth-child(4) a {
  background-position: -60px -50px;
}
.hf_right ul li:nth-child(5) a {
  background-position: -0px -101px;
}
.hf_right ul li p{
  font-size: 8px;
  text-align: center;
  color: #cfcfcf;
  transform: scale(0.8);
}
</style>