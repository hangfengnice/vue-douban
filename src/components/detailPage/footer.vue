<template>
  <div class="footer">
    <span>© 2005－2019 douban.com, all rights reserved 北京豆网科技有限公司</span>
    <div class='aList'>
      <p v-for="(item, index) of aList" :key="index">
        <a href="#" >{{item}}</a>·
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "footerDetail",
  data() {
    return {
      aList: [
        "关于豆瓣",
        "在豆瓣工作",
        "法律声明",
        "帮助中心",
        "图书馆合作",
        "移动应用",
        "豆瓣广告"
      ]
    };
  }
};
</script>

<style lang='scss' scoped>
.footer {
  min-width: 1040px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  span {
    color: #999;
    font-size: 13px;
  }
  a {
    color: #37a;
    font-size: 13px;
    text-decoration: none;
  }
  a:hover{
    color: #fff;
    background-color: #37a;
  }
  .aList{
    display: flex;
    p{
      color: #37a;
    }
  }
}
</style>