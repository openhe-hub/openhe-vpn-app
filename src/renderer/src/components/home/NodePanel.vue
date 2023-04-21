<template>
  <div id="node-panel-container">
    <el-scrollbar style="height: 100%">
      Nodes Panel
      <el-row v-for="i in [0, 1, 2, 3, 4]" :key="i">
        <el-col v-for="(card, index) in cardData.slice(i * 2, (i + 1) * 2)" :key="index" :span="11">
          <el-card class="box-card" shadow="hover">
            <template #header>
              <div class="card-header">
                <span class="card-title">{{ card.title }}</span>
                <el-tag class="mx-1" :type="status(card.delay)">{{ card.delay }} ms</el-tag>
              </div>
            </template>
            <el-button class="card-btn" type="primary" plain>Connect</el-button>
            <el-button class="card-btn" type="danger" plain>Disconnect</el-button>
            <el-button :icon="CopyDocument" circle />
          </el-card>
        </el-col>
      </el-row>
    </el-scrollbar>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import {CopyDocument} from "@element-plus/icons-vue";

const cardData = reactive([
  {
    title: 'China-Hongkong-1',
    delay: 400,
    available: true
  },
  {
    title: 'Japan-Tokyo-1',
    delay: 1500,
    available: true
  },
  {
    title: 'America-California-1',
    delay: 6000,
    available: true
  },
  {
    title: 'America-California-2',
    delay: 300,
    available: true
  },
  {
    title: 'America-California-3',
    delay: 100,
    available: true
  },
  {
    title: 'America-California-1',
    delay: 6000,
    available: true
  },
  {
    title: 'America-California-1',
    delay: 6000,
    available: true
  }
])

const status = (delay) => {
  if (delay <= 1000) return 'success'
  else if (delay > 1000 && delay <= 5000) return 'warning'
  else return 'danger'
}
</script>

<style scoped lang="less">
div#node-panel-container {
  width: 72vw;
  height: 48vh;
}

.box-card {
  margin: 12px;
  text-align: center;

  div.card-header {
    text-align: center;

    el-tag {
      margin-left: 5px;
    }

    span.card-title {
      margin-right: 20px;
      margin-left: 5px;
    }
  }
}
</style>
