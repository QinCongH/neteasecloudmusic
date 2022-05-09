  //路由入口
  import Vue from "vue";
  import VueRouter from "vue-router";
  //安装路由
  Vue.use(VueRouter)
  import FoundMusic from "../pages/FountMusic/FoundMusic.vue"
  import MyMusic from "../pages/MyMusic/MyMusic.vue"
  import Attention from "../pages/Attention/Attention.vue"
  import Download from "../pages/Download/Download.vue"
  import AnchormanStation from '../pages/FmContent/AnchormanStation.vue'
  import NewDisc from '../pages/FmContent/NewDisc.vue'
  import Ranking from '../pages/FmContent/Ranking.vue'
  import Recommend from '../pages/FmContent/Recommend.vue'
  import Singer from '../pages/FmContent/Singer.vue'
  import SongList from '../pages/FmContent/SongList.vue'
  //引入插件
  const router = new VueRouter({
      mode: 'hash', //路由模式
      routes: [{
          path: '/',
          component: FoundMusic,
          name: 'FaXianYinYue',
          redirect: '/Recommend',
          children: [{
                  path: '/AnchormanStation',
                  component: AnchormanStation,
                  name: 'ZhuBoDianTai',
                  meta: {
                      belong: 'FoundMusic'
                  }
              },
              {
                  path: '/NewDisc',
                  component: NewDisc,
                  name: 'XinDie',
                  meta: {
                      belong: 'FoundMusic'
                  }
              }, {
                  path: '/Ranking',
                  component: Ranking,
                  name: 'PaiHangBang',
                  meta: {
                      belong: 'FoundMusic'
                  }
              }, {
                  path: '/Recommend',
                  component: Recommend,
                  name: 'TuiJian',
                  meta: {
                      belong: 'FoundMusic'
                  }
              }, {
                  path: '/Singer',
                  component: Singer,
                  name: 'GeShou',
                  meta: {
                      belong: 'FoundMusic'
                  }
              }, {
                  path: '/SongList',
                  component: SongList,
                  name: 'GeDan',
                  meta: {
                      belong: 'FoundMusic'
                  }
              }
          ]
      }, {
          path: '/MyMusic',
          component: MyMusic,
          name: 'WoDeYinYue'
      }, {
          path: '/Attention',
          component: Attention,
          name: 'GuanZhu'
      }, {
          path: '/Download',
          component: Download,
          name: 'XiaZai'
      }]
  })

  export default router