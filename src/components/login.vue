<template>
  <form>
    <img class="from_img" src="../assets/images/login_phone.png" alt />
    <section class="from_section">
      <header class="form_head">
        <span>短信登录／注册</span>
        <span>密码登录</span>
      </header>
      <p class="form_notice">
        请仔细阅读
        <span>豆瓣使用协议、隐私政策</span>
      </p>
      <LoginInput />
      <Indentify />
      <Button />
      <div class="form_auto_login">
        <div>
          <input id='auto_login' type="checkbox" />
          <label for='auto_login'>下次自动登录</label>
        </div>
        <span>收不到验证码</span>
      </div>
      <div>
        <span>第三方登录:</span>
        <i class="iconfont icon-wechat"></i>
        <i class="iconfont icon-xinlang"></i>
      </div>
    </section>
    <!-- <section>

    </section>-->
  </form>
</template>

<script>
import LoginInput from "../components/loginInput";
import Indentify from "../components/login/indentify";
import Button from "../components/login/button";

export default {
  name: "login",
  components: {
    LoginInput,
    Indentify,
    Button
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
  padding-top: 10px;
  .form_head {
    font-size: 13px;
    display: flex;
    padding-bottom: 10px;
    span {
      flex: 1;
      text-align: center;
      border-bottom: 1px solid #9b9b9b;
      padding: 4px 0 5px;
    }
  }
  .form_notice {
    font-size: 12px;
    color: #9b9b9b;
    margin: 0 0 10px;
    span {
      color: #41ac52;
    }
  }
  .form_auto_login {
    font-size: 13px;
    padding: 11px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span{
      color: #41ac52;
      padding-right: 8px;
      
    }


  }
}
</style>