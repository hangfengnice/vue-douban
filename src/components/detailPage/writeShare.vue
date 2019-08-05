<template>
  <div class="write_share">
    <div class="write_share_left">
      <i class="iconfont icon-pencil"></i>
      <span>写笔记</span>
      <i class="iconfont icon-pencil"></i>
      <span>写书评</span>
      <i class="iconfont icon-renminbi"></i>
      <span>加入购书单</span>
      <span>分享到</span>
      <i class="iconfont icon-f11"></i>
    </div>
    <button>推荐</button>
  </div>
</template>

<script>
export default {
  name: "writeShare"
};
</script>

<style lang='scss' scoped>
.write_share {
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  .write_share_left {
    display: flex;
    align-items: flex-end;
    i {
      font-size: 11px;
      color: #ccc;
    }
    i:last-child {
      margin-left: -8px;
      font-size: 16px;
    }
    span {
      padding: 0 8px 0 3px;
      font-size: 13px;
      color: #37a;
    }
  }

  button {
    color: #4f946e;
    background-color: #f2f8f2;
    padding: 0 8px;
    border-radius: 3px;
    border: 1px solid #e3f1ed;
  }
  button:hover {
    border-color: #b9dcd0;
  }
}
</style>