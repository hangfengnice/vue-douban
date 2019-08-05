<template>
  <div class="read_online">
    <button>
      <i class="iconfont icon-shu"></i>
      <span>在线阅读</span>
      <i class="iconfont icon-arr-right-red"></i>
    </button>
    <span class="go_read">前往豆瓣阅读试读本书</span>
  </div>
</template>

<script>
export default {
  name: "readOnline"
};
</script>

<style lang='scss' scoped>
.read_online {
  margin: 10px 0;
  button {
    background-color: #83be73;
    border: none;
    border-radius: 4px;
    font-size: 13px;
    color: #fff;
    span {
      color: #fff;
    }
    i {
      font-size: 13px;
      padding: 0 3px;
    }
    i:last-child {
      font-size: 11px;
    }
  }
  .go_read {
    font-size: 12px;
    color: #999;
    margin-left: 16px;
  }
}
</style>