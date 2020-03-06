<template>
  <div class="home-banner" @click="onClick" v-if="img">
    <div class="bg-img" :style="{backgroundImage:url}">
      <div class="title">{{title}}</div>
      <div class="subtitle-wrapper">
        <div class="sub-Title">{{subtitle}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    subtitle: {
      type: String,
      default: ""
    },
    img: {
      type: String,
      default: ""
    }
  },
  computed: {
    url() {
      return "url(" + this.img + ")";
    }
  },
  methods: {
    onClick() {
      this.$emit("onClick");
    }
  }
};
</script>

<style lang="scss">
.home-banner {
  margin-top: 20px;
  padding-right: 20px;
  padding-left: 20px;
  .bg-img {
    height: 125px;
    border-radius: 15px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    box-sizing: border-box;
    .title {
      transform: translateY(30px);
      text-align: center;
      color: #fff;
      font-size: 18px;
    }
    .subtitle-wrapper {
      padding: 0 34%;
      .sub-Title {
        transform: translateY(45px);
        text-align: center;
        border-radius: 50px;
        border: 1px solid #ccc;
        padding: 8px 15px;
        background-color: #4585ff;
        color: #fff;
        font-size: 14px;
      }
    }
  }
}
</style>