<template>
  <div>
    <div class="home" v-if="isAuth">
      <SearchBar disabled="true" @onClick="onSearchBarkClick" :hotsearch="hotSearch" />
      <HomeCard :data="homeCard" />
      <HomeBar
        title="百本热门书籍免费开放"
        subtitle="立即体验"
        img="http://www.youbaobao.xyz/book/res/bg.jpg"
        @onClick="onHomeBarClick"
      />
      <div style="margin-top:23px;">
        <HomeBook
          title="为你推荐"
          :row="1"
          :col="3"
          :data="recommend"
          mode="col"
          btnText="换一批"
          @onMoreClick="()=>recommendChange('recommend')"
          @onBookClick="onBookClick"
        />
        <HomeBook
          title="免费阅读"
          :row="2"
          :col="2"
          :data="freeRead"
          mode="row"
          btnText="换一批"
          @onMoreClick="recommendChange('freeread')"
          @onBookClick="onBookClick"
        />
        <HomeBook
          title="当前最热"
          :row="1"
          :col="4"
          :data="hotBook"
          mode="col"
          btnText="换一批"
          @onMoreClick="recommendChange('hotbook')"
          @onBookClick="onBookClick"
        />
        <HomeBook
          title="分类"
          :row="3"
          :col="2"
          :data="category"
          mode="category"
          btnText="查看全部"
          @onMoreClick="onCategoryClick"
          @onBookClick="onBookClick"
        />
      </div>
    </div>
    <Auth v-if="!isAuth" @getUserInfo="init"></Auth>
  </div>
</template>

<script>
import SearchBar from "../../components/home/SearchBar";
import HomeCard from "../../components/home/homeCard";
import HomeBar from "../../components/home/HomeBanner";
import HomeBook from "../../components/home/HomeBook";
import Auth from "../../components/base/Auth";
import { getHomeData, recommend, freeread, hotbook } from "../../api";
import {
  getSetting,
  getUserInfo,
  setStorageSync,
  getStorageSync
} from "../../api/wechat";
export default {
  components: {
    SearchBar,
    HomeCard,
    HomeBar,
    HomeBook,
    Auth
  },
  data() {
    return {
      hotSearch: "",
      shelf: [],
      homeCard: [],
      banner: {},
      recommend: [],
      freeRead: [],
      hotBook: [],
      category: [],
      isAuth: true
    };
  },
  mounted() {
    // this.getHomeData();
    this.init();
  },
  methods: {
    getUserInfo() {
      getUserInfo(
        userInfo => {
          console.log(userInfo);
          setStorageSync("userInfo", userInfo);
          const { openId } = getStorageSync("openId");
          if (!openId || openId.length === 0) {
            console.log("请求openid");
          } else {
            console.log("已获取openId");
          }
        },
        () => {
          console.log("getuserinfo faild");
        }
      );
    },
    getSetting() {
      getSetting(
        "userInfo",
        () => {
          this.isAuth = true;
          this.getUserInfo();
        },
        () => {
          this.isAuth = false;
        }
      );
    },
    recommendChange(key) {
      switch (key) {
        case "recommend":
          recommend().then(res => {
            this.recommend = res.data.data;
          });
          break;
        case "freeread":
          freeread().then(res => {
            this.freeRead = res.data.data;
          });
          break;
        case "hotbook":
          hotbook().then(res => {
            this.hotBook = res.data.data;
          });
          break;
      }
    },
    onCategoryClick() {
      console.log(1);
    },
    getHomeData() {
      getHomeData({ openId: "1234" })
        .then(res => {
          const {
            data: {
              hotSearch: { keyword },
              shelf,
              banner,
              recommend,
              freeRead,
              hotBook,
              category,
              shelfCount
            }
          } = res.data;
          this.hotSearch = keyword;
          this.shelf = shelf;
          this.banner = banner;
          this.recommend = recommend;
          this.freeRead = freeRead;
          this.hotBook = hotBook;
          this.category = category;
          this.homeCard = {
            bookList: shelf,
            num: shelfCount,
            userInfo: {
              avatar:
                "//img1.sycdn.imooc.com/user/5b40c3d8000153d311101084-100-100.jpg",
              nickname: "麻花藤"
            }
          };
        })
        .catch(err => {
          console.log("首页异常捕获:");
          console.log(err);
        });
    },
    onBookClick() {
      console.log("onBookClick");
    },
    onSearchBarkClick() {
      // 跳转到搜索页面
    },
    onHomeBarClick() {
      console.log("onHomeBarClick");
    },
    onBookMoreClick() {
      console.log("onBookMoreClick");
    },
    init() {
      this.getSetting();
    }
  }
};
</script>

<style lang="scss">
.Homebook {
  margin-top: 23px;
}
</style>
