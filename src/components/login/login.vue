<template>
  <form>
    <img @click="changeToSaoMa" class="from_img" :src=" feiSaoMa ? imgPhone: imgCode" alt />
    <section class="from_section" v-if="feiSaoMa">
      <header class="form_head">
        <span @click="form_head_login" :class="{border: isRegisterTrue}">短信登录／注册</span>
        <span @click="form_head_code" :class="{border: isPswTrue}">密码登录</span>
      </header>
      <div class="form_notice">
        <div v-if='isRegisterTrue'>
          请仔细阅读
        <span>豆瓣使用协议、隐私政策</span>
        </div>
        <span class='findback' v-else>找回密码</span>
      </div>

      <LoginInput :isShow='isShow' />
      <Indentify :isShow='isRegisterTrue' />
      <Button :isdisable='true'/>

      <div class="form_auto_login">
        <div>
          <input id="auto_login" type="checkbox" />
          <label for="auto_login">下次自动登录</label>
        </div>
        <span v-if='isRegisterTrue'>收不到验证码</span>
        <div @click='isForeignClick' v-else>
          <span v-if='isForeign'>海外手机登录</span>
          <span v-else>帐号密码登录</span>          
        </div>
      </div>
      <div class="third">
        <span>第三方登录:</span>
        <i class="iconfont icon-wechat"></i>
        <i class="iconfont icon-xinlang1"></i>
      </div>
    </section>

    <section class="from_section" v-else>
      <header class="form_head">
        <p>二维码登录</p>
      </header>
      <div class="code_img">
        <img src="../../assets/images/greenBig.png" alt />
        <span>请打开豆瓣客户端扫一扫</span>
      </div>
    </section>
  </form>
</template>

<script>
import LoginInput from "./loginInput";
import Indentify from "./indentify";
import Button from "./button";

export default {
  name: "login",
  data() {
    return {
      feiSaoMa: true,
      imgPhone: require("../../assets/images/login_phone.png"),
      imgCode: require("../../assets/images/login_code.png"),
      isRegisterTrue: true,
      isPswTrue: false,
      isShow: true,
      isForeign: true,
      isDisabled: true
    };
  },
  components: {
    LoginInput,
    Indentify,
    Button
  },
  methods: {
    changeToSaoMa() {
      this.feiSaoMa = !this.feiSaoMa;
    },
    form_head_login() {
      this.isRegisterTrue = true;
      this.isPswTrue = false;
      this.isShow = true
    },
    form_head_code() {
      this.isRegisterTrue = false;
      this.isPswTrue = true;
      this.isShow = false
    },
    isForeignClick(){
      this.isForeign = !this.isForeign
      this.isShow = !this.isShow
    }
  }
};
</script>

<style lang='scss' scoped>
form {
  padding: 10px 0 10px 10px;
  position: relative;
}
img.from_img {
  position: absolute;
  right: 0;
  top: 10px;
  width: 30px;
  height: 30px;
}
.from_section {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  // border-bottom: 1px solid #ccc;
  .form_head {
    font-size: 13px;
    display: flex;
    padding-bottom: 10px;
    span {
      flex: 1;
      text-align: center;
      color: #ccc;
      border-bottom: 1px solid #ccc;
      padding: 4px 0 5px;
    }
    .border {
      color: #000;
      font-weight: 600;
      border-bottom: 1px solid #000;
    }
    p {
      font-weight: bold;
      padding-left: 8px;
    }
  }
  .code_img {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-top: 1px solid #ccc;
    padding-top: 16px;
    align-items: center;
    img {
      width: 170px;
      height: 170px;
    }
    span {
      margin-top: 10px;
      padding: 6px 20px;
      line-height: 13px;
      font-size: 13px;
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0.08);
    }
  }
  .form_notice {
    font-size: 12px;
    color: #9b9b9b;
    margin: 0 0 10px;
    span {
      color: #41ac52;
    }
    .findback{
      text-align: right;
      padding-left: 240px;
    }
  }
  .form_auto_login {
    font-size: 13px;
    padding: 11px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      color: #41ac52;
      padding-right: 8px;
    }
  }
  .third {
    font-size: 12px;
    margin-right: 50px;
    border-top: 1px solid #ccc;
    padding-top: 16px;
    .icon-wechat {
      color: #41ac52;
      padding: 6px 0 0 12px;
      font-size: 22px;
    }
    .icon-xinlang1 {
      color: rgb(233, 110, 112);
      padding: 6px 0 0 12px;
      font-size: 22px;
    }
  }
}
</style>