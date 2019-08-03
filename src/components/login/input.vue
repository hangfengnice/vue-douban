<template>
  <div class="input-index">
    <input type="text" placeholder="电影 音乐 读书" />
    <span>
      <img src="../../assets/images/search.png" alt="">
    </span>
    
  </div>
  
</template>

<script>
export default {
  name: "v-input"
};
</script>

<style lang='scss' scoped>
.input-index {
  position: relative;
  display: inline-block;
  zoom: 1;
  background-color: #fff;
  vertical-align: middle;
  width: 270px;
  height: 30px;
  border: 1px solid #c3c3c3;
  padding-right: 36px;
  input {
    width: 250px;
    border: none;
    font-size: 13px;
    height: 20px;
    padding: 5px;
    margin-right: 3px;
    vertical-align: middle;
  }

  img{
    position: absolute;
    width: 16px;
    height: 16px;
    right: 0;
    color: #fff;
    padding: 7px 10px;
    background: rgb(150, 150, 150);
  }
}
</style>