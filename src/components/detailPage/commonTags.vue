<template>
  <div class="tags_detail">
    <div class="content">
      <h2>豆瓣成员常用的标签(共207个)</h2>
      <span>· · · · · ·</span>
    </div>

    <div class="tags">
      <span class="tag" v-for="(item, index) of tags" :key="index">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "commonTags",
  props: {
    tags: Array
  },
  created() {
    console.log(this.tags);
  }
};
</script>

<style lang='scss' scoped>
.tags_detail {
  width: 100%;
  .content {
    display: flex;
    margin: 16px 0 0;
    color: #072;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    .tag {
      color: #37a;
      background-color: #f5f5f5;
      margin: 0 5px 5px 0;
      font-size: 13px;
      padding: 2px 11px 0;
      border-radius: 3px;
    }
  }
}
</style>