<template>
  <div class="fluid_index">
    <img src="../../../assets/images/jshtmlcss/js28.jpeg" alt />
    <span>代码如下</span>
    <div class='content'>
      <textarea name="" cols="60" rows="12">
        javascript
        先解第4小题, 其余两题可以套用 使用ES6

        function indexRepalce(idx1, idx2, arr){

        [arr[idx1],arr[idx2]] = [arr[idx2], arr[idx1]]
        return arr
        }

        console.log(indexRepalce(0,2,arr))
      </textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: "fluid"
};
</script>

<style lang='scss' scoped>
.fluid_index {
  display: flex;
  flex-direction: column;
  img {
    width: 200px;
    height: 300px;
  }
  .content{
    display: flex;
  }
}
</style>