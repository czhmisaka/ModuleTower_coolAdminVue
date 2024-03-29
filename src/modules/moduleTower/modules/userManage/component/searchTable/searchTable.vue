<!--
 * @Date: 2022-11-09 19:26:59
 * @LastEditors: CZH
 * @LastEditTime: 2023-08-14 18:00:30
 * @FilePath: /cool-admin-vue/src/modules/moduleTower/modules/userManage/component/searchTable/searchTable.vue
-->
<template>
  <cardBg
    ref="mainBox"
    :cusStyle="{
      padding: '12px',
    }"
  >
    <inputForm
      ref="inputBox"
      :query="query"
      @search="search"
      @refresh="refresh"
      @btnClick="btnClick"
      :queryItemTemplate="searchItemTemplate"
      :selectedList="selectedList"
      @inputChange="queryChange"
      :btn-list="btnList"
      :autoSearch="autoSearch"
    />
    <infoTable
      :template="showItemTemplate"
      :data-list="PageData.data || PageData.list"
      :loading="isLoading"
      @search="search"
      @refresh="refresh"
      :style="{
        height: TableHeight + 'px',
      }"
      :baseData="baseData"
      @selectedChange="selectedChange"
      @onChange="(value, options) => $emit('onChange', value, options)"
    />
    <el-pagination
      :style="{
        marginTop: '6px',
        float: 'right',
      }"
      v-if="PageData.total"
      v-model:current-page="PageData.pageNumber"
      v-model:page-size="PageData.pageSize"
      :page-sizes="[10, 20, 30, 40, 100]"
      :small="true"
      :background="true"
      layout="total, sizes, prev, pager, next, jumper"
      :total="PageData.total"
      @size-change="(e) => search({ pageSize: e })"
      @current-change="(e) => search({ pageNumber: e })"
      :hide-on-single-page="false"
    />
  </cardBg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import sideDialogForm from "/$/moduleTower/modules/userManage/component/searchTable/drawerForm.vue";
import cardBg from "/$/moduleTower/components/cell/card/cardBg.vue";
import {
  componentInfo,
  inputType,
  propInfo,
  gridSizeMaker,
} from "/$/moduleTower/components/grid/module/dataTemplate";
import inputForm from "./inputForm.vue";
import infoTable from "./infoTable.vue";
import { deepClone } from "/$/moduleTower/components/grid/module/cardApi/deepClone";
import { tableCellTemplateMaker } from "./searchTable";
import search from "@iconify-icons/ep/search";
import { ElPagination } from "element-plus";
import {
  PageDataTemplate,
  stringAnyObj,
  btnCellTemplate,
  btnActionTemplate,
} from "/$/moduleTower/modules/userManage/types";
import { setData } from "/$/moduleTower/components/grid/module/cardApi/index";

export default defineComponent({
  componentInfo: {
    labelNameCn: "搜索列表组件",
    key: "searchTable",
    description:
      "搜索列表组件，可以监听baseData内的参数作为搜索传参数，支持对接不同风格的表单搜索组件",
    gridInfo: {
      middle: gridSizeMaker(9, 8),
    },
  } as componentInfo,

  propsDetail: {
    defaultQuery: {
      label: "初始化搜索值",
      type: inputType.obj,
    },
    searchFunc: {
      label: "搜索函数",
      type: inputType.functionEditor,
    },
    showItemTemplate: {
      label: "展示单元模板列表",
      type: inputType.array,
    },
    searchItemTemplate: {
      label: "搜索单元模板列表",
      type: inputType.array,
    },
    searchKeyWithBaseData: {
      label: "需要读取的baseDataKey值",
      type: inputType.array,
    },
    pageConfig: {
      label: "分页配置",
      type: inputType.obj,
    },
    btnList: {
      label: "按钮行为列表",
      type: inputType.array,
    },
    autoSearch: {
      label: "自动搜索",
      type: inputType.boolean,
    },
  } as propInfo,

  baseProps: {
    autoSearch: false,
    defaultQuery: { helloworld: "hello world" },
    searchFunc: (data: any) => {
      return [data];
    },
    showItemTemplate: [tableCellTemplateMaker("HELLO WORLD", "helloworld")],
    searchItemTemplate: [tableCellTemplateMaker("HELLO WORLD", "helloworld")],
    btnList: [],
  },

  watch: {
    baseData: {
      handler(val) {
        this.searchKeyWithBaseData
          ? this.searchKeyWithBaseData.map((key) => {
              if (
                Object.keys(val).indexOf(key) > -1 &&
                this.baseDataForCheck[key] != val[key]
              ) {
                this.baseDataForCheck[key] = val[key];
                this.search();
              }
            })
          : null;
      },
      deep: true,
      immediate: true,
    },
  },
  props: [
    "defaultQuery",
    "baseData",
    "sizeUnit",
    "searchFunc",
    "showItemTemplate",
    "searchItemTemplate",
    "searchKeyWithBaseData",
    "btnList",
    "autoSearch",
    "pageConfig",
  ],
  components: { cardBg, inputForm, infoTable, sideDialogForm },
  data() {
    return {
      query: {},
      PageData: {} as PageDataTemplate,
      isLoading: false,

      isReady: false,

      // 当前选择项
      selectedList: [] as any[],

      // 计算列表可用高度
      TableHeight: 500,

      interval: null as any,
      baseDataForCheck: {},
    };
  },
  async mounted() {
    this.isReady = false;
    await this.initData();
    await this.$nextTick();
    this.$emit("ready");
    this.isReady = true;
    await this.search();
    let that = this;
    if (that.interval) clearInterval(that.interval);
    that.interval = setInterval(() => {
      if (that.$refs["mainBox"] && that.$refs["inputBox"]) {
        let baseHeight = 0;
        let offsetHeight = -6;
        if (that.PageData.total) baseHeight = 32;
        if (that.$refs["inputBox"].$el.offsetHeight)
          that.TableHeight =
            that.$refs["mainBox"].$el.offsetHeight -
            that.$refs["inputBox"].$el.offsetHeight -
            34 -
            baseHeight -
            offsetHeight;
        else
          that.TableHeight =
            that.$refs["mainBox"].$el.offsetHeight - 24 - baseHeight - offsetHeight;
      }
    }, 200);
  },
  methods: {
    async initData() {
      if (this.defaultQuery && Object.keys(this.defaultQuery).length > 0) {
        this.query = deepClone(this.defaultQuery);
      }
    },

    /**
     * @name: queryChange
     * @description: 承接inputForm 回传数据
     * @authors: CZH
     * @Date: 2022-11-21 18:24:28
     */
    queryChange(query: stringAnyObj) {
      this.query = query;
      if (this.autoSearch) this.search();
    },

    refresh() {
      if (
        this.autoSearch == false &&
        this?.searchKeyWithBaseData &&
        this?.searchKeyWithBaseData?.length > 0
      ) {
        let data = {};
        this.searchKeyWithBaseData.map((x) => {
          data[x] = {};
        });
        const that = this;
        setData(that, data);
      }
      this.initData();
    },

    /**
     * @name: btnClick
     * @description: 自定义按钮事件
     * @authors: CZH
     * @Date: 2022-11-21 19:04:03
     * @param {*} btn
     */
    async btnClick(btn: btnCellTemplate, data?: stringAnyObj) {
      btn["isLoading"] = true;
      if (btn.type == btnActionTemplate.OpenDrawer) {
        this.$modules.getModuleApi()["userManage_openDrawerForm"](this, btn.drawerProps);
      } else if (btn.type == btnActionTemplate.Function && btn.function) {
        let that = this;
        await btn.function(that, data);
      } else if (btn.type == btnActionTemplate.Url) {
        window.open(btn.url);
      }
      btn["isLoading"] = false;
    },

    async selectedChange(selectedList: any[]) {
      this.selectedList = selectedList;
    },

    /**
     * @name: search
     * @description: 执行搜索事件
     * @authors: CZH
     * @Date: 2022-11-29 11:01:28
     * @param {*} query
     */
    async search(query: { [key: string]: any } = this.query) {
      this.query = {
        ...this.query,
        ...query,
      };
      if (this.searchFunc && this.isReady) {
        this.isLoading = true;
        try {
          let result = await this.searchFunc(this.query, this);
          this.PageData = {};
          if (result.total || result.total == 0) this.PageData = result;
          else this.PageData.data = result;
        } catch (e) {
          console.log("【searchTable】组件search事件报错", e);
        } finally {
          this.selectedChange([]);
          this.isLoading = false;
        }
      }
    },
  },
});
</script>

<style lang="scss" scoped></style>
