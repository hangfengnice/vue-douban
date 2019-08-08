<template>
  <div class="scroll_index">
    <div class="wrap">
      <h2>窗口高度的获取:</h2>
      <div>
        <button @click="onClickScroll">点我</button>
        <span>window.innerHeight: {{windowinnerHeight}}</span>
        <span>document.documentElement.clientHeight: {{documentdocumentElementclientHeight}}</span>
        <span>document.documentElement.offsetHeight: {{offsetHeight}}</span>
        <span>document.documentElement.getBoundingClientRect().height: {{getBoundingClientRect}}</span>
      </div>
    </div>
    <div class="wrap">
      <h2>document.documentElement.clientHeight 获取不到border</h2>
      <div>
        <button class="button1" @click="onClickScroll1" ref="button">点我获取border为1的按钮的高度</button>
        <span>getBoundingClientRect().height: {{getBoundingClientRect1}}</span>
        <span>document.documentElement.clientHeight: {{documentdocumentElementclientHeight1}}</span>
      </div>
    </div>
    <div style="height: 800px;"></div>
    <div class="wrap fixed">
      <h2>窗口滚动高度的获取:</h2>
      <div>
        <button @click="onClickScroll">滚动即可出现参数</button>
        <span>document.documentElement.scrollTop: {{documentdocumentElementscrollTop}}</span>
        <span>window.pageYOffset: {{windowpageYOffset}}</span>
        <span>document.body.scrollTop /移动端: {{documentbodyscrollTop}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "domscroll",
  data() {
    return {
      windowinnerHeight: "",
      documentdocumentElementclientHeight: "",
      offsetHeight: "",
      getBoundingClientRect: "",
      getBoundingClientRect1: "",
      documentdocumentElementclientHeight1: "",
      documentdocumentElementscrollTop: null,
      windowpageYOffset: "",
      documentbodyscrollTop: ""
    };
  },
  created() {
     let that = this
    window.addEventListener("scroll", function() {
      that.documentdocumentElementscrollTop = document.documentElement.scrollTop;
      that.windowpageYOffset = this.pageYOffset;
      that.documentbodyscrollTop = document.body.scrollTop;
    });
  },
  methods: {
    onClickScroll() {
      this.windowinnerHeight = window.innerHeight;
      this.documentdocumentElementclientHeight =
        document.documentElement.clientHeight;
      this.offsetHeight = document.documentElement.offsetHeight;
      this.getBoundingClientRect = document.documentElement.getBoundingClientRect().height;
    },
    onClickScroll1() {
      this.getBoundingClientRect1 = this.$refs.button.getBoundingClientRect().height;
      this.documentdocumentElementclientHeight1 = this.$refs.button.clientHeight;
    }
  }
};
</script>

<style lang='scss' scoped>
.scroll_index {
  display: flex;
  flex-direction: column;
  .wrap {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    div {
      display: flex;
      flex-direction: column;
      button {
        border-radius: 4px;
      }
    }
  }
  .fixed {
    position: fixed;
    bottom: 10px;
    right: 30px;
  }
  .button1 {
    border: 1px solid #ccc;
  }
}
</style>