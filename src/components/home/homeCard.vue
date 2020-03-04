<template>
  <div class="home-card">
    <div class="home-card-inner">
      <div class="userinfo">
        <div class="avatar-wrapper">
          <ImageView src="//img1.sycdn.imooc.com/user/5b40c3d8000153d311101084-100-100.jpg" round />
        </div>
        <div class="nickname">{{'米老鼠'}}</div>
        <div class="shelf-text">书架共有{{3}}本好书</div>
        <div class="round-item" />
        <div class="shelf-text">精选好书</div>
      </div>
      <div class="bookinfo">
        <div class="book-wrapper">
          <div class="book-image-wrapper">
            <ImageView
              src="https://www.youbaobao.xyz/book/res/img//EarthSciences/978-981-10-3713-9_CoverFigure.jpg"
            />
          </div>
          <div class="book-image-wrapper">
            <ImageView
              src="https://www.youbaobao.xyz/book/res/img//EarthSciences/978-981-10-3713-9_CoverFigure.jpg"
            />
          </div>
          <div class="book-image-wrapper">
            <ImageView
              src="https://www.youbaobao.xyz/book/res/img//EarthSciences/978-981-10-3713-9_CoverFigure.jpg"
            />
          </div>
        </div>
        <div class="shelf-wrapper">
          <div class="shelf">书架</div>
          <van-icon name="arrow" class="arrow" size="11px" color="#ccc" />
        </div>
      </div>
      <div class="feedback-wrapper" @click="onFeedbackClick">
        <p>反馈</p>
      </div>
    </div>
  </div>
</template>

<script>
import ImageView from "./../base/ImageView";
export default {
  props: {
    data: Object,
    hasSign: {
      type: Boolean,
      default: false
    },
    sinDay: {
      type: Number,
      default: 0
    }
  },
  methods: {
    gotoShelf() {},
    onBookClick() {},
    sign() {},
    onFeedbackClick() {}
  },
  components: {
    ImageView
  }
};
</script>

<style lang="scss">
.home-card {
  background-image: linear-gradient(-90deg, #54575f 0%, #595b60 100%);
  border-radius: 15px;
  margin: 22px 20px 0;
  .home-card-inner {
    position: relative;
    padding: 21.5px 15px 20px 20px;
    box-sizing: border-box;
    .userinfo {
      display: flex;
      align-items: center;
      .avatar-wrapper {
        height: 20px;
        width: 20px;
      }
      .nickname,
      .shelf-text {
        color: #fff;
        font-size: 12px;
      }
      .nickname {
        margin: 0 8.5px;
      }
      .shelf-text {
        opacity: 0.7;
      }
      .round-item {
        width: 4px;
        height: 4px;
        background-color: #ccc;
        border-radius: 50%;
        margin: 0 8px;
      }
    }
    .bookinfo {
      display: flex;
      align-items: center;
      margin-top: 16.5px;
      .book-wrapper {
        display: flex;
        flex: 1;
        justify-content: space-between;
        padding-right: 20px;
        .book-image-wrapper {
          width: 72px;
          height: 101px;
        }
      }
      .shelf-wrapper {
        display: flex;
        text-align: center;
        .shelf {
          font-size: 11px;
          width: 11px;
          word-break: break-word;
          color: #fff;
          opacity: 0.8;
          margin-right: 6px;
        }
      }
    }
    .feedback-wrapper {
      position: absolute;
      right: 0;
      top: 21.5px;
      width: 44.5px;
      height: 23.5px;
      line-height: 23.5px;
      border-radius: 100px 0 0 100px;
      background-color: #6a6a6a;
      //opacity: .3;
      font-size: 11px;
      color: #fff;
      text-align: center;
      p {
        opacity: 1;
      }
    }
  }
}
</style>