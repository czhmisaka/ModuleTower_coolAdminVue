<!--
 * @Date: 2021-12-30 17:48:16
 * @LastEditors: CZH
 * @LastEditTime: 2023-08-14 17:57:56
 * @FilePath: /cool-admin-vue/src/modules/moduleTower/modules/userManage/Index.vue
-->

<template>
  <div
    :style="{
      width: 'calc(100%)',
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

<script lang="ts">
import gridDesktop from "/$/moduleTower/components/grid/gridDesktop.vue";
import { defineComponent } from "vue";
import { PageConfig } from "./PageConfigData/index";

export default defineComponent({
  components: {
    gridDesktop,
  },

  computed: {
    component() {
      return this.$modules.getAllComponents() as any;
    },
  },
  methods: {
    async init() {
      if (this.$route) {
        let PageName = "";
        if (this.$route.meta && this.$route.meta.PageName) {
          PageName = this.$route.meta.PageName.split("/")[
            this.$route.meta.PageName.split("/").length - 1
          ];
          PageName = PageName.toUpperCase();
        } else {
          PageName = String(
            this.$route.path.split("/")[this.$route.path.split("/").length - 1]
          );
        }
        if (Object.keys(PageConfig).indexOf(PageName) > -1) {
          let res = PageConfig[PageName];
          this.desktopData = res;
          this.desktopDataList = await this.desktopData.desktopData();
        }
      }
    },
  },
  watch: {
    $route: {
      handler(): void {
        this.init();
      },
      deep: true,
    },
  },
  data: () => {
    return {
      desktopDataList: [],
      desktopData: PageConfig[Object.keys(PageConfig)[0]],
      Env: {},
      dataText: "",
    };
  },
  async mounted() {
    this.init();
  },
});
</script>
