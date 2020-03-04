<template>
  <div>
    <SearchBar disabled="true" @onClick="onSearchBarkClick" />
    <HomeCard />
  </div>
</template>

<script>
import SearchBar from "../../components/home/SearchBar";
import HomeCard from "../../components/home/homeCard";
export default {
  components: {
    SearchBar,
    HomeCard
  },
  methods: {
    onSearchBarkClick() {
      // 跳转到搜索页面
    }
  }
};
</script>

<style lang="scss">
</style>
