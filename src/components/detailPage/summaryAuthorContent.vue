<template>
  <div class="content_detail">
    <div class="content">
      <h2>{{wrap.title}}</h2>
      <span>· · · · · ·</span>
    </div>
    <p class="detail">{{wrap.summary}}</p>
  </div>
</template>

<script>
export default {
  name: "sumAuthContent",
  props: {
    wrap: Object
  }
};
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
    font-size: 13px;
    text-indent: 2em;
    line-height: 1.62;
    color: #111;
  }
}
</style>