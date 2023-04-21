<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <NavigationBar></NavigationBar>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>

<script setup>
import NavigationBar from '../components/common/NavigationBar.vue'
</script>

<style scoped></style>
