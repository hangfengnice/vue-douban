<template>
  <div>
    <div class="css_index">
      <router-link :to='item.path' v-for="(item, index) of content" :key="index">{{item.title}}</router-link>
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
          path: "/study/css/fluid",
          title: "流体布局"
        }
      ]
    };
  }
};
</script>

<style lang='scss' scoped>
.css_index {
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  a {
    flex: 1;
    text-decoration: none;
    text-align: center;
    background-color: #fff;
    color: rgb(14, 95, 14);
  }
  .router-link-active {
    color: #fff;
    background-color: rgb(146, 243, 146);
    padding: 4px 6px;
    border-radius: 4px;
  }
}
</style>