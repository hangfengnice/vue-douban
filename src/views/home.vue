<template>
  <div class="wrap">
    <HomeHead />
    <!-- login -->
    <section  v-if='isLoginShow'>
      <div class="app">
        <div class="douban">
          <span class="app-title">豆瓣 6.0</span>
          <div class="slogn">
            <p>下载豆瓣app</p>
            <div class="img" @mousemove="onMouseMove" @mouseout="onMouseOut">
              <img class="green" v-if="showCode" src="../assets/images/green_code.png" alt />

              <div v-else class="codeBig">
                <img class="greenBig" src="../assets/images/greenBig.png" alt />
                <span>iOS / Android 扫码直接下载</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="login">
        <Login @loginOk='LoginHide' />
      </div>
    </section>
    <!-- book -->
    <div class='threediv'>
      <BookList />
    </div>
    <!-- music -->
    <div class='threediv'>
      <MusicList />
    </div>
    <!-- movie -->
    <div class='threediv'>
      <MovieList />
    </div>
  </div>
</template>

<script>
import HomeHead from "../components/homeHead";
import Login from "../components/login/login";
import MovieList from "./movie/homepage";
import MusicList from "./music/homepage";
import BookList from "./read/homepage";

export default {
  name: "home",
  data() {
    return {
      showCode: true,
      isLoginShow: true
    };
  },
  components: {
    HomeHead,
    Login,
    MovieList,
    MusicList,
    BookList
  },

  methods: {
    onMouseMove() {
      this.showCode = false;
    },
    onMouseOut() {
      this.showCode = true;
    },
    LoginHide(){
      this.isLoginShow = false
    }
  }
};
</script>

<style lang='scss' scoped>
.wrap {
  padding-top: 30px;
}
section {
  position: relative;
  height: 304px;
  width: 950px;
  box-sizing: border-box;
  margin: 0 auto;
  margin-bottom: 25px;
  background-color: #edf4ed;
  .app {
    width: 650px;
    position: relative;
    .douban {
      width: 150px;
      height: 120px;
      position: absolute;
      top: 75px;
      right: 50px;
      display: flex;
      flex-direction: column;
      .app-title {
        margin: 7px 0;
        font-size: 25px;
        color: #111;
        line-height: 24px;
      }
      .slogn {
        margin-top: 18px;
        display: flex;
        flex-direction: row;
        p {
          background-color: #00b51d;
          color: #fff;
          padding: 9px 21px;
          font-size: 12px;
        }
        .img {
          width: 30px;
          height: 30px;
          margin-left: 4px;
          position: relative;
          z-index: 1;
          .green {
            width: 100%;
            height: 100%;
          }
          .codeBig {
            position: absolute;
            top: 0;
            left: 0;
            width: 200px;
            height: 240px;
            padding: 15px 5px;
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #fff;
            .greenBig {
              width: 180px;
              height: 180px;
            }
            span {
              margin-top: 10px;
              font-size: 13px;
            }
          }
        }
      }
    }
  }
  .login {
    width: 300px;
    height: 296px;
    position: absolute;
    right: 20px;
    top: 0;
  }
}
.threeSection{
  background-color: #edf4ed;
  width: 950;
  margin: 0 auto;
}
</style>