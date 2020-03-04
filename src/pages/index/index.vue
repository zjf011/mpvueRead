<template>
  <div>
    <SearchBar disabled="true" @onClick="onSearchBarkClick" />
    <HomeCard />
    <HomeBar
      title="百本热门书籍免费开放"
      subtitle="立即体验"
      img="http://www.youbaobao.xyz/book/res/bg.jpg"
      @onClick="onHomeBarClick"
    />
  </div>
</template>

<script>
import SearchBar from "../../components/home/SearchBar";
import HomeCard from "../../components/home/homeCard";
import HomeBar from "../../components/home/HomeBanner";
export default {
  components: {
    SearchBar,
    HomeCard,
    HomeBar
  },
  methods: {
    onSearchBarkClick() {
      // 跳转到搜索页面
    },
    onHomeBarClick() {
      console.log("onHomeBarClick");
    }
  }
};
</script>

<style lang="scss">
</style>
