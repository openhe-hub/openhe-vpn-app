<template>
  <div id="nav-container">
    <el-menu default-active="1" class="el-menu-vertical-demo" style="height: 92vh">
      <el-menu-item index="1">
        <el-icon size="22px">
          <Menu />
        </el-icon>
        <div class="nav-text">Home</div>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon size="22px">
          <DataAnalysis />
        </el-icon>
        <div class="nav-text">Statistics</div>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon size="22px">
          <Memo></Memo>
        </el-icon>
        <div class="nav-text">About</div>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon size="22px">
          <Setting></Setting>
        </el-icon>
        <div class="nav-text">Setting</div>
      </el-menu-item>
    </el-menu>
    <div id="copyright-container">v-0.1-beta © 2023 openhe</div>
  </div>
</template>

<script setup>
import { DataAnalysis, Memo, Menu, Setting } from '@element-plus/icons-vue'
</script>

<style scoped lang="less">
div.nav-text {
  font-size: 18px;
  margin: 10px;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
}

div#copyright-container {
  color: #7a7c7d;
  font-size: 16px;
  text-align: center;
  transition: color 0.5s;
  margin-left: 1vw;
}
div#copyright-container:hover {
  color: #e7e3e3;
}

:deep(.el-menu) {
  border-right: 0;
  margin-left: 2vw;
  margin-top: 2vh;
}
</style>
