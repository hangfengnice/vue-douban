<template>
<button :disabled='isdisable' :class='{nodisable: !isdisable}' @click='onClickButton'>登录豆瓣</button>
</template>

<script>
export default {
name:"index",
props: {
  isdisable: Boolean
},
created(){
  console.log(this.isdisable)
},
methods: {
  onClickButton(){
    console.log(1)
  }
}
}
</script>

<style lang='scss' scoped>
button{
  width: 100%;
  height: 34px;
  border: none;
  border-radius: 4px;
  background-color: rgba(66, 189, 86, .5);
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  outline: none;
  cursor: not-allowed;
}
.nodisable{
  background-color: #20af0e;
}
</style>