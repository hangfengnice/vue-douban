<template>
  <div class="wrap_who_read">
    <div class="whoRead" v-for='(author, index) of commentsSticky' :key='index'>
    <img :src="author.avatar" alt />
    <div>
      <span class="name">{{author.name}}</span>
      <span class="time">阅读时间: {{author.published}}</span>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "index",
  props: {
    commentsSticky: Array
  }
};
</script>

<style lang='scss' scoped>
.wrap_who_read{
  position: sticky;
  top: 0;
}
  .whoRead{
    display: flex;
    margin: 5px 0;
    img{
      width: 48px;
      height: 48px;
      padding-right: 10px;
    }
    div{
      display: flex;
      flex-direction: column;
      .name{
        font-size: 13px;
        color: #37a;
      }
      .time{
        color: #ccc;
        font-size: 12px;
      }
    }
  }
</style>