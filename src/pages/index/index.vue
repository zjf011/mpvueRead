<template>
  <div>
    <SearchBar disabled="true" @onClick="onSearchBarkClick" />
    <ImageView 
    height='300px'
    mode='scaleToFill'
    round
    src='https://tpc.googlesyndication.com/simgad/3671971519289773179?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qkck9DZvLTBzleqV3mBvtYGO9-uQQ'
    />
  </div>
</template>

<script>
import SearchBar from "../../components/home/SearchBar";
import ImageView from "../../components/base/ImageView"
export default {
  components: {
    SearchBar,
    ImageView
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
