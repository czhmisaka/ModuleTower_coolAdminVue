<!--
 * @Date: 2023-05-25 13:30:40
 * @LastEditors: CZH
 * @LastEditTime: 2023-08-14 16:06:48
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
      :grid-col-num="desktopData.data.gridColNum"
      :desktopData="desktopDataList.data"
      :cus-style="desktopData.data?.cusStyle"
      :component-lists="componentsList.data"
    />
  </div>
</template>

<script setup lang="ts" name="modulesTower">
import { onMounted, reactive, ref } from "vue";
import gridDesktop from "../components/grid/gridDesktop.vue";
import {
  CardComponentTemplate,
  gridCellTemplate,
} from "/$/moduleTower/components/grid/module/dataTemplate";
import { desktopDataTemplate } from "/$/moduleTower/modules/userManage/types";
import { getModuleFromView, getAction } from "/$/moduleTower/utils/util";

let desktopData = reactive({ data: {} as desktopDataTemplate });
let desktopDataList = reactive({ data: [] as gridCellTemplate[] });
let componentsList = reactive({ data: [] as CardComponentTemplate[] });
onMounted(async () => {
  let res = await getModuleFromView(true);
  componentsList.data = await getAction().getAllComponents();
  const firstmodule = res[0];
  desktopData.data = firstmodule["pageMap"]["MAINDESKTOP"];
  if (desktopData.data.desktopData)
    desktopDataList.data = await desktopData.data.desktopData();
  console.log(getAction().getAllComponents(), "moduleList");
});
</script>

<style scoped></style>
