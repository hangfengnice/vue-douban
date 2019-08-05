<template>
  <div class="write_share">
    <div class="write_share_left">
      <div v-for="(item,index) of contentIcon" :key="index">
        <i :class="['iconfont', item.icon]"></i>
        <span>{{item.content}}</span>
      </div>
    </div>
    <button>推荐</button>
  </div>
</template>

<script>
export default {
  name: "writeShare",
  props: {
    contentIcon: Array
  },
  creatde(){
    console.log(this.contentIcon)
  }
};
</script>

<style lang='scss' scoped>
.write_share {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  .write_share_left {
    display: flex;
    align-items: flex-end;
    i {
      font-size: 11px;
      color: #ccc;
    }
    i:last-child {
      margin-left: -8px;
      font-size: 16px;
    }
    span {
      padding: 0 8px 0 3px;
      font-size: 13px;
      color: #37a;
    }
    span:hover{
      color: #fff;
      background-color: #37a;
    }
    // span:last-child:hover{
    //   text-decoration: #fff;
    // }
  }

  button {
    color: #4f946e;
    background-color: #f2f8f2;
    padding: 0 8px;
    border-radius: 3px;
    border: 1px solid #e3f1ed;
  }
  button:hover {
    border-color: #b9dcd0;
  }
}
</style>