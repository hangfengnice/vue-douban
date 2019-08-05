<template>
  <div class="insert_rate_star">
    <button>想读</button>
    <button>在读</button>
    <button>读过</button>
    <div class="el_rate">
      <span>评价:</span>
      <el-rate :texts="texts" show-text></el-rate>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      texts: ["很差", "较差", "还行", "推荐", "力荐"]
    };
  }
};
</script>

<style lang='scss' scoped>
.insert_rate_star {
  display: flex;
  padding: 20px 0 3px;
  button {
    height: 24px;
    padding-right: 7px;
    font: normal 12px sans-serif;
    margin-right: 10px;
    color: #111;
    cursor: pointer;
    border-radius: 4px;
    background-color: rgb(249, 238, 212);
  }
  .el_rate {
    display: flex;
    align-items: center;
    span {
      font-size: 13px;
      padding-right: 6px;
    }
  }
}
</style>
