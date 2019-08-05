<template>
<div class="comments_chat">
  <div class='avatar_rate'>
    <img :src="imgUrl" alt="">
    <span class='author'>{{author}}</span>
    <el-rate class='el_icon' allow-half  disabled :colors="colors" :value='score'></el-rate>
    <span class='published'>{{published}}</span>
  </div>
  <p>{{summary}}</p>

  <div class='upDown'>
    <span class='num'>
      <i class="iconfont icon-shang1"></i>
      <span>8</span>
    </span>
    <span class='num'>
      <i class="iconfont icon-xia"></i>
      <span>2</span>
    </span>
    <span class='num_right'>8回应</span>
  </div>
</div>
</template>

<script>
export default {
name:"index",
props: {
  comment: Object
},

data(){
  return{
    colors: ['#F7BA2A', '#F7BA2A', '#F7BA2A'],
    imgUrl: "",
  author: "",
  summary: "",
  score: "",
  published: ""
  }
},
created(){
  const comment = this.comment
  this.imgUrl = comment.author.avatar
  this.author = comment.author.name
  this.summary = comment.summary
  this.score = Number(comment.rating.value)
  this.published = comment.published
}
}
</script>

<style lang='scss' scoped>
.comments_chat{
  padding: 20px 0;
  border-top: 1px solid #ccc;
  .avatar_rate{
    display: flex;
    align-items: center;
    img{
      width: 24px;
      height: 24px;
    }
    .author{
      color: #37a;
      margin: 0 10px;
      font-size: 13px;
    }
    .published{
      color: #999;
      font-size: 13px;
    }
  }
  p{
    font-size: 13px;
    color: #494949;
    margin: 10px 0;
  }
  .upDown{
    margin: 10px 0;
    font-size: 13px;
    .num{
      color: #37a;
      background-color: #f0f7f9;
      padding: 0 6px;
      margin: 0 6px;
    }
    .num_right{
      color: #37a;
      margin-left: 8px;
    }
  }
}
</style>