<template>
  <div class="search-bar">
    <div class="search-bar-wrapper">
      <van-icon name="search" class="search" size="18px" color="#858c96" />
      <input
        type="text"
        class="search-bar-input"
        :focus="focus"
        :disabled="disabled"
        :maxlength="limit"
        :placeholder="hotsearch.length ==0 ?'搜索':hotsearch"
        v-model="searchWord"
        @input="onChange"
        confirm-type="search"
        @confirm="onConfirm"
      />
      <van-icon name="clear" class="clear" size="18px" color="#858c96" @click="onClearClick" v-if="searchWord"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "searchbar",
  props: {
    focus: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    limit: {
      type: Number,
      default: 50
    },
    hotsearch: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      searchWord: ""
    };
  },
  methods: {
    onSearchBarClick() {
      this.$emit("onClick");
    },
    onClearClick() {
      this.searchWord = "";
      this.$emit("onClear");
    },
    onChange(e) {
      const { value } = e.mp.detail;
      this.$emit("onClear", value);
    },
    onConfirm(e) {
      const { value } = e.mp.detail;
      this.$emit("onConfirm", value);
    },
    setValue(v) {
      this.searchWord = v;
    },
    getValue() {
      return this.searchWord;
    }
  }
};
</script>

<style lang="scss" scoped>
.search-bar {
  padding: 15px 15.5px;
  .search-bar-wrapper {
    background-color: #f5f7f9;
    height: 40px;
    box-sizing: border-box;
    padding: 12px 17px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    .search-bar-input {
      flex: 1;
      margin-left: 8px;
    }
    .search,
    .clear {
      display: flex;
      text-align: center;
    }
  }
}
</style>