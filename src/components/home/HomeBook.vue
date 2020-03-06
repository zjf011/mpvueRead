<template>
  <div class="home-book">
    <div class="home-book-header">{{title}}</div>
    <div class="home-book-content">
      <div class="home-book-row" v-for="(item,index) in bookData" :key="index">
        <div
          class="home-book-col"
          v-for="(book,index2) in item"
          :key="index2"
          :style="{flex:'0 0 '+(100/col)+'%'}"
        >
          <div
            class="book-wrapper"
            :style="{flexDirection:mode===HOME_BOOK_MODE.COL ? 'column':'row'}"
            @click="onBookClick"
            v-if="mode===HOME_BOOK_MODE.COL || mode===HOME_BOOK_MODE.ROW"
          >
            <ImageView :src="book.cover"></ImageView>
            <div class="book-title-wrapper book-title-col" v-if="mode===HOME_BOOK_MODE.COL">
              <div class="book-title">{{book.title}}</div>
            </div>
            <div class="book-title-wrapper book-title-row" v-else>
              <div class="book-title">{{book.title}}</div>
              <div>
                <div class="book-title book-author">{{book.author}}</div>
                <div class="book-title book-author">{{book.categoryText}}</div>
              </div>
            </div>
          </div>
          <div class="category-wrapper" v-else>
            <div class="category-text">{{book.text}}</div>
            <div class="category-num">{{book.num}}本书</div>
            <div class="category-image-wrapper">
              <div class="category-img1">
                <ImageView :src="book.cover" />
              </div>
              <div class="category-img2">
                <ImageView :src="book.cover2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home-book-footer" v-if="showBtn">
      <van-button round custom-class="home-book-btn" @click="onMoreClick">{{btnText}}</van-button>
    </div>
  </div>
</template>

<script>
import { HOME_BOOK_MODE, CATEGORY } from "@/utils/const";
import ImageView from "../base/ImageView";
export default {
  props: {
    title: String,
    data: {
      type: Array,
      default: []
    },
    btnText: String,
    row: {
      type: Number,
      default: 0
    },
    col: {
      type: Number,
      default: 1
    },
    mode: {
      type: String,
      default: HOME_BOOK_MODE
    },
    showTitle: {
      type: Boolean,
      default: true
    },
    showBtn: {
      type: Boolean,
      default: true
    },
    linearBg: {
      type: Boolean,
      default: false
    }
  },
  components: {
    ImageView
  },
  methods: {
    onMoreClick() {
      this.$emit("onMoreClick");
    },
    onBookClick() {
      this.$emit("onBookClick");
    }
  },
  mounted() {
    console.log(this.bookData);
  },
  computed: {
    bookData() {
      const { data, row, col } = this;
      if (data && data.length > 0) {
        data.forEach(book => {
          book.text = CATEGORY[book.categoryText.toLowerCase()]
        });

        const number = row * col;
        const _bookData = data.slice(0, number);
        const _bookDatarow = [];
        let _row = 0;
        while (_row < row) {
          _bookDatarow.push(_bookData.slice(_row * col, _row * col + col));
          _row++;
        }
        return _bookDatarow;
      } else {
        return [];
      }
    },
    HOME_BOOK_MODE() {
      return HOME_BOOK_MODE;
    }
  }
};
</script>

<style lang='scss'>
.home-book {
  .home-book-header {
    padding: 13px 0 0 20px;
  }
  .home-book-content {
    padding: 0 12px;
    margin-top: 10.5px;
    .home-book-row {
      display: flex;
      flex-flow: row nowrap;
      margin-top: 12px;
      .home-book-col {
        padding: 0 8px;
        box-sizing: border-box;
        .book-wrapper {
          display: flex;
          .book-title-wrapper {
            &.book-title-col {
              .book-title {
                font-size: 12px;
                color: #212731;
                line-height: 16.5px;
                max-height: 33px;
                font-weight: 500;
                overflow: hidden;
                word-break: break-word;
              }
            }
            &.book-title-row {
              flex: 0 0 50%;
              padding: 10px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              .book-title {
                font-size: 14px;
                color: #1f1f1f;
                line-height: 18px;
                max-height: 36px;
                overflow: hidden;
                word-break: break-word;
              }
              .book-author {
                font-size: 12px;
                color: #868686;
                line-height: 14px;
                max-height: 14px;
              }
            }
          }
        }
        .category-wrapper {
          display: flex;
          position: relative;
          background: #f8f9fb;
          justify-content: space-between;
          border-radius: 10px;
          height: 106px;
          padding: 13px 0 16px 16px;
          box-sizing: border-box;
          flex-direction: column;
          .category-text {
            width: 120px;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #212832;
            font-size: 16px;
            line-height: 22.5px;
          }
          .category-num {
            color: #868686;
            font-size: 12px;
            line-height: 16.5px;
          }
          .category-image-wrapper {
            position: absolute;
            right: 0;
            bottom: 0;
            .category-img1 {
              position: absolute;
              right: 0;
              bottom: -1px;
              z-index: 5;
              width: 45px;
              img {
                border-radius: 0 0 10px 0;
              }
            }
            .category-img2 {
              position: absolute;
              right: 30px;
              bottom: -1px;
              width: 36px;
            }
          }
        }
      }
    }
  }
  .home-book-footer {
    padding: 12px 20px 20px;
    .home-book-btn {
      width: 100%;
      border: 1px solid #edeeee;
      color: #3696ef;
      font-size: 14px;
    }
  }
}
</style>