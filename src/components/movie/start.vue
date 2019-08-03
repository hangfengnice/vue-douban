<template>
<div class="star_container">
  <div class="stars">
      <img v-for="(item, index) of star " :key="index" :src="1 == 1 ? fullStar : noStar" />>
  </div>
  <text>{{ score }}</text>
</div>
</template>

<script>
export default {
name:"star",
props: {
  score: Number,
  star: Array,
},
data(){
  return {
    fullStar: require('../../assets/images/icon/star.png'),
    noStar: require('../../assets/images/icon/none-star.png')
  }
}

}
</script>

<style lang='scss' scoped>
.star_container{
  display: flex;
  flex-direction: row;
}

.stars{
  display: flex;
  flex-direction: row;
  height: 24px;
  margin-right: 24px;
}

.stars image{
  padding-left: 3px;
  height: 24px;
  width: 24px;
}

text{
  line-height: 24px;
}
</style>