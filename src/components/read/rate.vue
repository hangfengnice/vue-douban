<template>
<div class="rate_star_meter">
<span class='rate_title'>{{rate.title}}</span>
<meter class='rate_meter' min='0' low='80' max='100' :value='rate.meter' optimum="80"></meter>
<span class='rate_chance'>{{rate.chance}}%</span>

</div>
</template>

<script>
export default {
name:"rate",
props: {
  rate: Object
}
}
</script>

<style lang='scss' scoped>
.rate_star_meter{
  margin: 4px 0 6px;
  font-size: 12px;
  color: #9b9b9b;
  display: flex;
  align-items: center;
  .rate_title{
    min-width: 19px;
  }
  .rate_meter{
    min-width: 3px;
    margin-left: 2px;
  }
  .rate_chance{
    margin-left: 4px;
  }
}

</style>