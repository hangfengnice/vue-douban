<template>
  <div class="login_index">
    <p>登录即注册</p>
    <Login @loginOk='loginOk'/>
  </div>
</template>

<script>
import Login from "../components/login/login";

export default {
  name: "login",
  components: {
    Login
  },
  methods: {
    loginOk(){
      this.$router.push('/home')
    }
  }
};
</script>

<style lang='scss' scoped>

.login_index{
  width: 340px;
  margin: 60px auto 0;
  padding: 10px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  p{
    color: #111;
  }
}
</style>