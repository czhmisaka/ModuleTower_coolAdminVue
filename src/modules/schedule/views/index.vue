<!--
 * @Date: 2023-07-08 13:46:35
 * @LastEditors: CZH
 * @LastEditTime: 2023-07-08 14:02:41
 * @FilePath: /cool-admin-vue/src/modules/schedule/views/index.vue
-->
<template>
  <cl-crud ref="Crud">
    <cl-row>
      <!-- 刷新按钮 -->
      <cl-refresh-btn />
      <!-- 新增按钮 -->
      <cl-add-btn />
      <!-- 删除按钮 -->
      <cl-multi-delete-btn />
      <cl-flex1 />
      <!-- 关键字搜索 -->
      <cl-search-key />
    </cl-row>

    <cl-row>
      <!-- 数据表格 -->
      <cl-table ref="Table">
        <template #column-url="{ scope }">
          <el-image
            class="preview"
            :z-index="10000"
            preview-teleported
            :preview-src-list="[scope.row.url]"
            :src="scope.row.url"
            fit="contain"
          ></el-image>
        </template>
      </cl-table>
    </cl-row>

    <cl-row>
      <cl-flex1 />
      <!-- 分页控件 -->
      <cl-pagination />
    </cl-row>

    <!-- 新增、编辑 -->
    <cl-upsert ref="Upsert" />
  </cl-crud>
</template>

<script lang="ts" name="菜单名称" setup>
import { useCrud, useTable, useUpsert } from "@cool-vue/crud";
import { useCool } from "/@/cool";
import { Right } from "@element-plus/icons-vue/dist/types";

const { service } = useCool();

// cl-upsert
const Upsert = useUpsert({
  items: [
    {
      label: "日程名称",
      prop: "name",
      component: {
        name: "el-input",
      },
    },
    {
      label: "展示图片",
      prop: "url",
      component: {
        name: "cl-upload",
        props: {
          isSpace: true,
        },
      },
    },
    {
      label: "日程结束时间",
      prop: "endTime",
      component: {
        name: "el-date-picker",
        props: {
          type: "datetime",
          "value-format": "YYYY-MM-DD HH:mm:ss",
        },
      },
    },
  ],
});

// cl-table
const Table = useTable({
  columns: [
    {
      label: "日程名称",
      prop: "name",
    },
    {
      label: "展示图片",
      prop: "url",
    },
    {
      label: "结束时间",
      prop: "endTime",
    },
    {
      type: "op",
      width: 300,
      headerAlign: "right",
      buttons: ["info", "edit", "delete"],
    },
  ],
});

// cl-crud
const Crud = useCrud(
  {
    service: service.schedule.schedule,
    permission: {
      add: true,
      page: true,
      delete: true,
      list: true,
      info: true,
      update: true,
    },
  },
  (app) => {
    app.refresh();
  }
);
</script>
<style lang="scss" scoped>
.preview {
  width: 180px;
  height: 90px;
}
</style>
