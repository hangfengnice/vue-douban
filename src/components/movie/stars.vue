<template>
  <div class="star_container">
    <div class="stars">
      <img v-for="(item, index) of stars " :key="index" :src="item == 1 ? fullStar : noStar" />
    </div>
    <span class="score">{{average}}</span>
  </div>
</template>

<script>
export default {
  name: "stars",
  props: {
    average: Number,
    stars: Array
  },
  data() {
    return {
      fullStar: require("../../assets/images/icon/star.png"),
      noStar: require("../../assets/images/icon/none-star.png")
    };
  }
};
</script>

<style lang='scss' scoped>
.star_container {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.stars {
  display: flex;
  flex-direction: row;
  margin-right: 8px;
  img{
    height: 11px;
    width: 11px;
    line-height: 11px;
  }
}

.score {
  color: #e09015;
  font-size: 12px;
}
</style>