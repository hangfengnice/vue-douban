<template>
<div class="index">
  <input type="text" :placeholder=" isShow ? '验证码' : '密码'">
  <span v-if='isShow'>获取验证码</span>
</div>
</template>

<script>
export default {
name:"index",
props: {
  isShow: Boolean
}
}
</script>

<style lang='scss' scoped>
.index{
  margin-bottom: 10px;
  background-color: #fff;
  font-size: 13px;
  height: 34px;
  color: #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span{
    color: #41ac52;
    padding-right: 10px;
  }
  input{
    border: none;
    padding: 0 10px;
    flex: 1;
  }
}
</style>