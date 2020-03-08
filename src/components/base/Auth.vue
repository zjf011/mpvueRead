<template>
  <div class="auth-wrapper">
    <div class="auth">
      <div class="auth-inner-wrapper">
        <div class="auth-info-wrapper">
          <div class="auth-image">
            <ImageView src="https://www.youbaobao.xyz/mpvue-res/logo.jpg" round></ImageView>
          </div>
          <div class="auth-title">登录爱读不读</div>
          <div class="auth-subtitle">全球好书爱读不读</div>
        </div>

        <button class="auth-btn" open-type="getUserInfo" @getuserinfo="getUserInfo">授权登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import ImageView from "./ImageView";
export default {
  components: {
    ImageView
  },
  methods: {
    getUserInfo() {
      this.$emit("getUserInfo");
    }
  }
};
</script>

<style lang="scss">
.auth-wrapper {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #999;
  z-index: 10;
  .auth {
    width: 270px;
    height: 248px;
    background-color: #f5f5f5;
    border-radius: 18px;
    position: relative;
    .auth-inner-wrapper {
      .auth-info-wrapper {
        display: flex;
        margin-top: 22.5px;
        position: relative;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .auth-image {
          width: 74px;
        }
        .auth-title {
          font-size: 13px;
          color: #999;
          line-height: 18.5px;
          margin-top: 18px;
        }
        .auth-subtitle {
          font-size: 16px;
          color: #333;
          font-weight: 400;
          line-height: 22.5px;
          margin-top: 3.5px;
        }
      }
      .auth-btn {
        position: absolute;
        width: 100%;
        bottom: 0;
        border-radius: 0 0 18px 18px;
        background-image: linear-gradient(90deg, #1ea3f5 0%, #0f87fc 100%);
        font-size: 15px;
        color: #fff;
        height: 49px;
        line-height: 49px;
      }
    }
  }
}
</style>