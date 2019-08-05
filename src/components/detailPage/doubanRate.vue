<template>
  <div class="star">
    <span class="star_rate">豆瓣评分</span>
    <div class="rate_star_review">
      <strong>{{book.average}}</strong>
      <div class="star_review">
        <el-rate class='el_icon' allow-half  disabled :colors="colors" :value='book.score'></el-rate>
        <span>{{book.numRaters}}人评价</span>
      </div>
    </div>
    <Rating v-for="(item, index) of rating" :key="index" :rate="item" />
  </div>
</template>

<script>
import Rating from "../read/rate";

export default {
  name: "doubanRate",
  props: {
    book: Object
  },
  created(){
    console.log(this.book)
  },
  components: {
    Rating
  },
  data() {
    return {
      colors: ['#F7BA2A', '#F7BA2A', '#F7BA2A'],
      rating: [
        {
          title: "5星",
          meter: 66,
          chance: "66.1"
        },
        {
          title: "4星",
          meter: 27,
          chance: "27.4"
        },
        {
          title: "3星",
          meter: 6,
          chance: "5.9"
        },
        {
          title: "2星",
          meter: 0,
          chance: "0.4"
        },
        {
          title: "1星",
          meter: 0,
          chance: "0.2"
        }
      ]
    };
  }
};
</script>

<style lang='scss' scoped>
.star {
  margin: 2px 0 0;
  padding: 0 0 0 15px;
  .star_rate {
    font-size: 12px;
    color: #9b9b9b;
  }
  .rate_star_review {
    padding: 10px 0;
    display: flex;
    .el_icon{
      display: flex;
      margin-top: 4px;
      margin-bottom: -4px;
    }
    strong {
      color: #494949;
      min-width: 30%;
      font-size: 28px;
      margin-right: 8px;
    }
    .star_review {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      span {
        color: #37a;
        margin-top: 8px;
        font-size: 12px;
      }
    }
  }
}
</style>