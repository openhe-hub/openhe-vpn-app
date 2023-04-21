<template>
  <div id="console-container">
    Log Console
    <el-input id="console-box" v-model="text" type="textarea" :autosize="{minRows: 5, maxRows: 10}" readonly>
    </el-input>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const text = ref(
  '22:11:00 connecting to Japan-Tokyo-1 node' +
    '\n22:11:10 connected to Japan-Tokyo-1 node' +
    '\n22:11:11 system proxy changed' +
    '\n22:40:00 disconnected to Japan-Tokyo-1 node' +
    '\n22:40:01 clearing system proxy' +
    '\n22:40:01 clearing system proxy' +
    '\n22:40:01 clearing system proxy' +
    '\n22:40:01 clearing system proxy' +
    '\n22:40:01 clearing system proxy' +
    '\n22:40:01 clearing system proxy' +
    '\n22:40:01 clearing system proxy' +
    '\n22:40:01 clearing system proxy' +
    '\n22:40:11 system proxy cleared.'
)
</script>

<style scoped lang="less">
:deep(.el-textarea__inner::-webkit-scrollbar){
  width: 6px ;
  height: 6px ;
}

:deep(.el-textarea__inner::-webkit-scrollbar-thumb ){
  border-radius: 3px ;
  -moz-border-radius: 3px ;
  -webkit-border-radius: 3px ;
  background-color: #3e3e41;
}
:deep(.el-textarea__inner::-webkit-scrollbar-track) {
  background-color: transparent ;
}

:deep(.el-textarea__inner){
  width: 33vw;
  height: 30vh;
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
  background-color: black;
  border: 0;
  resize: none;
  margin-top: 20px;
  font-size: 12px;
  font-family: Consolas, serif;
  overflow-y: visible;
}
</style>
