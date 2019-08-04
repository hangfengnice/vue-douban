<template>
<div class="readlist_wrap">
<Read v-for='(item, index) of readList' :key='index' :read='item'/>
</div>
</template>

<script>
import Read from './read'
export default {
name:"readlist",
props: {
  readList: Array 
},
components: {
  Read
}
}
</script>

<style lang='scss' scoped>
.readlist_wrap{
  display: flex;
  width: 675px;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>