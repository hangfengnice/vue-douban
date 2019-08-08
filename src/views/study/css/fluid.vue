<template>
  <div class="fluid_index">
    <img src="../../../assets/images/jshtmlcss/question.jpg" alt />
    <span>代码如下</span>
    <div class='content'>
      <textarea name="" cols="30" rows="10">
        html
        <body>
          <dl>
            <dt>手机系统</dt>
            <dd>Android</dd>
            <dt>登录方式</dt>
            <dd>QQ 互联互动</dd>
            <dt>绑定时间</dt>
            <dd>2019-01-02 11:10</dd>
            <dt>绑定状态</dt>
            <dd>有效</dd>
          </dl>
        </body>
      </textarea>
      <textarea cols='50' rows="64">
        css样式
        <style>
          /* 公共部分 */
          dl {
          line-height: 1.5;
          margin: 0;
          padding: 10px;
          border: 1px solid #ccc;
          background-color: #fff;
          }
          /* dd {
          word-break: break-all;    
          text-align: right;
          margin-left: 0;
          }
          dd:empty::before {
          content: '-';    
          color: #999;
          } */

          /* absolute实现 */
          /* dt {
          position: absolute;
          }
          dd {
          margin-left: 5em;    
          } */

          /* flex实现 */
          /* dl {
          display: flex;
          flex-wrap: wrap;
          }
          dt {
          width: 5em;
          }
          dd {
          width: calc(100% - 5em);
          } */

          /* grid实现 */
          /* dl {
          display: grid;
          grid-template-columns: auto 1fr;
          grid-column-gap: 1em;
          } */

          /* float实现 */
          /* dt {
          width: 5em;
          float: left;    
          }
          dd {
          overflow: hidden;    
          } */

          /* 流体特性实现 */
          dd {
          margin: -1.5em 0 0 5em;
          }
      </style>
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