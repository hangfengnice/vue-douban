<template>
<div class="index">
  <span>新书速递</span>
  <span>······</span>
  (<span class='more'>更多</span>)
</div>
</template>

<script>
export default {
name:"listHeader"
}
</script>

<style lang='scss' scoped>
span:first{
  font-size: 15px;
  color: #072;
}
.more:hover{
  background-color: rgb(54, 54, 201);
  color: #fff;
  
}
span{
  color: #017a85;
  font-size: 12px;
  margin-right: 12px;
}

</style>