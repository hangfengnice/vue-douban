<template>
  <div class="index">
    <span v-if="isShow">+86</span>
    <input
      @keyup.enter="OnEnterup"
      @blur="OnEnterup"
      v-model="account"
      :placeholder="isShow ? '手机号' : '手机号/邮箱'"
    />
  </div>
</template>

<script>
export default {
  name: "loginInput",
  props: {
    isShow: Boolean
  },
  data() {
    return {
      account: ""
    };
  },
  methods: {
    OnEnterup() {
      this.$emit("onInput", this.account);
    }
  }
};
</script>

<style lang='scss' scoped>
.index {
  width: 100%;
  height: 34px;
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 10px;
  span {
    font-size: 15px;
    padding: 0 10px;
    border-right: 1px solid #ccc;
    font-weight: bold;
  }
  input {
    border: none;
    padding: 8px 40px 8px 10px;
  }
}
</style>