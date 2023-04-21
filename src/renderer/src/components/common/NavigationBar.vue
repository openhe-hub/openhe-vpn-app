<template>
  <div id="nav-container">
    <el-menu default-active="1" class="el-menu-vertical-demo">
      <el-menu-item index="1">
        <el-icon>
          <Menu />
        </el-icon>
        <div>Home</div>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon>
          <DataAnalysis />
        </el-icon>
        <div>Statistics</div>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon>
          <Memo></Memo>
        </el-icon>
        <div>About</div>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon>
          <Setting></Setting>
        </el-icon>
        <div>Setting</div>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import {DataAnalysis, Memo, Menu, Setting} from '@element-plus/icons-vue'

export default {
  name: 'NavigationBar',
  components: {Setting, Memo, DataAnalysis, Menu }
}
</script>

<style scoped></style>
