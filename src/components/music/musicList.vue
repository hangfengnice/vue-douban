<template>
<div class="readlist_wrap">
<Music v-for='(item, index) of musicList' :key='index' :music='item'/>
</div>
</template>

<script>
import Music from './music'
export default {
name:"readlist",
props: {
  musicList: Array 
},
components: {
  Music
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