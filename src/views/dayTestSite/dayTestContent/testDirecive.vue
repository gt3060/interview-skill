<template>
  <div>
    <el-label>引入组件:</el-label><br/><br/>
    <el-button v-eventFocus="eventData">eventFocus</el-button>
    <el-button v-globalEvent="globalData">globalEvent</el-button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      eventData:'111',
      globalData:'222'
    }
  }
}
</script>

<style>

</style>