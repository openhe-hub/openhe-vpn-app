<template>
  <div id="home-container">
    <el-container class="el-home-container">
      <el-aside width="20vw">
        <NavigationBar></NavigationBar>
      </el-aside>
      <el-divider direction="vertical" border-style="dashed" />
      <el-main>
        <el-row>
          <NodePanel></NodePanel>
        </el-row>
        <el-divider border-style="dashed"></el-divider>
        <el-row>
          <el-col :span="12">
            <Console></Console>
          </el-col>
          <el-col :span="12">
            <Chart></Chart>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import NavigationBar from '../components/common/NavigationBar.vue'
import NodePanel from '../components/home/NodePanel.vue'
import Console from '../components/home/Console.vue'
import Chart from '../components/home/Chart.vue'
</script>

<style scoped lang="less">
div#home-container{
  overflow-x: hidden;
  overflow-y: hidden;
}

:deep(.el-divider--vertical) {
  display: inline-block;
  width: 1px;
  height: 97vh;
  margin: 0 8px;
  vertical-align: middle;
  position: relative;
}
</style>
