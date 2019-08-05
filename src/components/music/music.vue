<template>
<div class='movie_container' @click="$router.push('/read/detail/'+ read.id)">
  <img class='movie_img' :src='read.img'  />
  <span class='movie_title'>{{read.title}}</span>
  <span class='book_author'>{{read.author}}</span>
  <button>免费试读</button>
</div>
</template>

<script>

export default {

name:"index",
props: {
  read: Object
},
components: {

}
}
</script>

<style lang='scss' scoped>
.movie_container{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  button{
    outline: none;
    border: none;
    width: 90px;
    height: 24px;
    margin: 14px 12.5px 0;
    background-color: rgb(169, 177, 184);
    color:#fff;
    border-radius: 4px;
  }
}

.movie_img{
  width: 115px;
  height: 163px;
  padding-bottom: 10px;
}

.movie_title{
  font-size: 14px;
  margin-bottom: 8px;
}
.book_author{
  font-size: 14px;
}



</style>