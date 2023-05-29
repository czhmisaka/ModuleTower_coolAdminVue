<!--
 * @Date: 2023-05-25 13:30:40
 * @LastEditors: CZH
 * @LastEditTime: 2023-05-28 23:48:40
 * @FilePath: /cool-admin-vue/src/modules/moduleTower/views/index.vue
-->
<template>
  <div
    :style="{
      width: 'calc(100% - 24px)',
      height: 'calc(100%)',
      background: 'rgba(0,0,0,0)',
      overflow: 'hidden',
    }"
  >
    <gridDesktop
      :grid-col-num="desktopData.gridColNum"
      :desktopData="desktopDataList"
      :component-lists="component"
      :cus-style="desktopData?.cusStyle"
    />
  </div>
</template>

<script setup lang="ts">
import gridDesktop from "../components/grid/gridDesktop.vue";
import { gridCellTemplate } from "../components/grid/module/dataTemplate";
let desktopData = {} as desktopDataTemplate;
let desktopDataList = [] as gridCellTemplate[];
</script>

<style scoped></style>
