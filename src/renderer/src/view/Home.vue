<template>
  <div id="home-container">
    <el-container class="el-home-container">
      <el-aside width="25vw">
        <NavigationBar></NavigationBar>
      </el-aside>
      <el-divider direction="vertical" border-style="dashed"/>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>

<script setup>
import NavigationBar from '../components/common/NavigationBar.vue'
</script>

<style scoped lang="less">
:deep(.el-divider--vertical){
  display:inline-block;
  width: 1px;
  height: 97vh;
  margin:0 8px;
  vertical-align:middle;
  position:relative;
}
</style>
