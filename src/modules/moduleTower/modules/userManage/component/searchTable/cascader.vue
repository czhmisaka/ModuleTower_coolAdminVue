<!--
 * @Date: 2023-03-20 14:36:17
 * @LastEditors: CZH
 * @LastEditTime: 2023-08-14 14:16:20
 * @FilePath: /cool-admin-vue/src/modules/moduleTower/modules/userManage/component/searchTable/cascader.vue
-->
<script setup lang="ts">
import {
  onBeforeUnmount,
  ref,
  shallowRef,
  onMounted,
  defineEmits,
  watchEffect,
} from "vue";
import { ElLoading } from "element-plus";
const props = defineProps({
  optionsList: {
    type: Array,
    default: "",
  },
  propsOptions: {
    type: Object,
  },
  //   accept: {
  //     type: String,
  //     default: "",
  //   },
  modelValue: {
    type: String,
    default: "",
  },
  //   action: {
  //     type: String,
  //     default: "/cult/sysFile/uploadFeedback",
  //   },
  //   limit: {
  //     type: Number,
  //     default: 3,
  //   },
});
const cascaderArray = ref([]);

onMounted(() => {
  console.log(props.modelValue, "vvvv");
});

const loading = ref<any>({});

let uploadNum = 0;

const beforeUpload = (e) => {
  uploadNum++;
  loading.value = ElLoading.service({
    fullscreen: true,
    text: "正在上传中",
  });
};

const emit = defineEmits(["update:modelValue"]);
console.log(emit, "emit");

watchEffect(() => {
  // console.log(optionsList)
  // console.log(emit("optionsList"))
  console.log(props.modelValue, "vvvvwwww");
  console.log(cascaderArray.value, "ppppp");
  if (cascaderArray.value) {
    emit("update:modelValue", JSON.stringify(cascaderArray));
  }
});
</script>

<template>
  <div class="wholeBox">
    <el-cascader
      :options="optionsList"
      :props="propsOptions"
      clearable
      v-model="cascaderArray"
    >
    </el-cascader>
  </div>
</template>

<style lang="scss" scoped>
.wholeBox {
  width: 100%;
  height: auto;
  display: inline-block;
}
.flexBox {
  width: 100%;
  display: flex;
  justify-content: space-between;
  line-height: 30px;
  padding: 0px 12px;
  .btnList {
    width: auto;
    .btn {
      margin-left: 3px;
    }
  }
}
</style>
