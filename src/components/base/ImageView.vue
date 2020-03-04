<template>
  <div class="image-view">
    <img
      :class="round ? 'image round':'image'"
      :style="{height}"
      :src="src"
      :mode="mode"
      :lazy-load="lazyLoad"
      @click="onClick"
      @load="onLoad"
      @error="onError"
      v-show="!isLoading && !error"
    />
    <img
      :class="round ? 'image round':'image'"
      :style="{height}"
      src="../../../static/images/image-instead.jpg"
      :mode="mode"
      :lazy-load="lazyLoad"
      v-show="isLoading || error"
    />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: ""
    },
    mode: {
      type: String,
      default: "widthFix"
    },
    lazyLoad: {
      type: Boolean,
      default: true
    },
    round: {
      type: Boolean,
      default: false
    },
    height: {
      type: String,
      default: "auto"
    }
  },
  watch: {
    src(newvalue, prevalue) {}
  },
  data() {
    return {
      isLoading: true,
      error: false
    };
  },
  methods: {
    onClick() {
      this.$emit("onClick");
    },
    onLoad() {
      this.isLoading = false;
      console.log("Image onLoad");
    },
    onError() {
      console.log("image faild load");
      this.error = true;
      this.isLoading = false;
    }
  }
};
</script>

<style lang='scss'>
.image-view{
    width:100%;
    img{
        width: 100%;
        &.round{
            border-radius: 50%;
        }
    }
}
</style>