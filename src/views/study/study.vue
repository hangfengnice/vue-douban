<template>
  <div class="study_index">
    <h3>学习小结</h3>
    <div class="subjects">
      <router-link v-for="(item, index) of subjects" :key="index" :to="item.path">{{item.title}}</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      subjects: [
        {
          title: "html",
          path: "/study/html"
        },
        {
          title: "css",
          path: "/study/css"
        },
        {
          title: "javascript",
          path: "/study/javascript"
        }
      ]
    };
  }
};
</script>

<style lang='scss' scoped>
.study_index {
  width: 1040px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    color: #111;
    padding: 8px 0;
  }
  .subjects {
    display: flex;
    width: 650px;
    flex-direction: row;
    a {
      flex: 1;
      text-decoration: none;
      text-align: center;
      background-color: #fff;
      color: rgb(146, 243, 146);
      border-radius: 6px;
      border: 1px solid;
    }
    .router-link-active {
      color: #fff;
      background-color: rgb(146, 243, 146);
    }
  }
}
</style>