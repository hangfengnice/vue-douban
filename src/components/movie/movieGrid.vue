<template>
  <div class="wrap">
    <Movie class='index' v-for="(item, index) of movies" :key="index" :movie='item'/>

  </div>
</template>

<script>
import Movie from "./movie";

export default {
  name: "moviegrid",
  props: {
    movies: Array
  },
  components: {
    Movie
  }
};
</script>

<style lang='scss' scoped>
.wrap{
  overflow: hidden;
}
.index{
  float: left;
  padding: 10px;
  margin-bottom: 10px;
}
</style>