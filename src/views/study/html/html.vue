<template>
  <div>
    <div class="html_index">
      <router-link :to="item.path" v-for="(item, index) of content" :key="index">{{item.title}}</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      content: [
        {
          path: "/study/html/domscroll",
          title: "Dom 滚动场景"
        }
      ]
    };
  }
};
</script>

<style lang='scss' scoped>
.html_index {
  margin: 16px 0 0;
  width: 100%;
  display: flex;
  align-items: center;
  a {
    flex: 1;
    text-decoration: none;
    text-align: center;
    background-color: #fff;
    color: rgb(7, 110, 7);
    // border-radius: 6px;
    // border: 1px solid;
  }
  .router-link-active {
    color: #fff;
    background-color: rgb(146, 243, 146);
    padding: 4px 6px;
    border-radius: 6px;
  }
}
</style>