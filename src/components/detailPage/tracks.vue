<template>
<div class="index">
 <div class="content_detail">
    <div class="content">
      <h2>曲目</h2>
      <span>· · · · · ·</span>
    </div>
    <div class=detail>
      <span v-for='(item, index) of tracks' :key='index'>{{item}}</span>
    </div>
  </div>

</div>
</template>

<script>
export default {
name:"index",
props: {
  tracks: Array
}
}
</script>

<style lang='scss' scoped>
.content_detail {
  .content {
    color: #072;
    display: flex;
    margin: 24px 0 3px;
    span {
      margin-right: 8px;
    }
  }
  .detail {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-size: 13px;
    line-height: 1.62;
    color: #111;
  }
}
</style>