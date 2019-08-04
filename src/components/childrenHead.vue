<template>
  <div class="index">
    <div class="head_title">
      <router-link
        tag="span"
        v-for="(item, index) of tags"
        :to="item.path"
        :key="index"
      >{{item.title}}</router-link>
    </div>
    <div @mouseenter="showHideImg" @mouseleave="hideImg">
      <span class="downLoad">
        下载豆瓣客户端
        <div v-if="showHideImgBottom" class="hideImg">
          <img class="doubanBig" src="../assets/images/doubanBig.png" alt />
          <span class="douban">豆瓣</span>
          <img class="doubanBig1" src="../assets/images/doubanBig1.png" alt />
          <span class="iphone">iPhone · Android</span>
        </div>
      </span>
    </div>

    <span class="headLogin" @click="$router.push('/login')">登录/注册</span>
  </div>
</template>

<script>
export default {
  name: "movie-header",
  data() {
    return {
      showHideImgBottom: false,
      tags: [
        {
          title: "豆瓣",
          path: "/home",
          class: "read"
        },

        {
          title: "读书",
          path: "/read",
          class: "read"
        },
        {
          title: "电影",
          path: "/movie",
          class: "movie"
        },
        {
          title: "音乐",
          path: "/music",
          class: "music"
        },
        {
          title: "小组",
          path: "/group",
          class: "group"
        },
        {
          title: "同城",
          path: "/events",
          class: "events"
        },
        {
          title: "FM",
          path: "/fm",
          class: "fm"
        },
        {
          title: "时间",
          path: "/time",
          class: "time"
        },
        {
          title: "豆品",
          path: "/market",
          class: "market"
        },
        {
          title: "更多",
          path: "",
          class: ""
        }
      ]
    };
  },
  methods: {
    showHideImg() {
      this.showHideImgBottom = true;
    },
    hideImg() {
      this.showHideImgBottom = false;
    }
  }
};
</script>

<style lang='scss' scoped>
.index {
  height: 28px;
  display: flex;
  min-width:750px;
  align-items: center;
  font-size: 12px;
  justify-content: space-between;
  color: #d5d5d5;
  background-color: rgb(85, 87, 83);
  .head_title {
    display: flex;
    flex: 1;
    span {
      padding: 0 12px;
      cursor: pointer;
    }
  }
  .downLoad {
    margin-right: 15px;
    padding: 6px 3px;
  }
  .hideImg {
    position: absolute;
    right: 5px;
    top: 28px;
    width: 180px;
    background-color: #fff;
    border: 1px solid #eee;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
    .doubanBig {
      width: 80px;
      height: 80px;
    }
    .douban {
      margin-top: 15px;
      font-size: 24px;
      color: #000;
    }
    .doubanBig1 {
      margin-top: 10px;
      width: 160px;
      height: 160px;
    }
    .iphone {
      margin-top: 10px;
      font-size: 12px;
      color: #379;
      background-color: #ccc;
    }
    
  }
  .headLogin {
      padding-right: 30px;
    }
}
</style>