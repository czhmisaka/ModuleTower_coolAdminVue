<!--
 * @Date: 2023-03-20 14:36:17
 * @LastEditors: CZH
 * @LastEditTime: 2023-05-17 14:44:55
 * @FilePath: /configforpagedemo/src/modules/userManage/component/searchTable/uploadFileList.vue
-->
<script setup lang="ts">
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import {
  onBeforeUnmount,
  ref,
  shallowRef,
  onMounted,
  defineEmits,
  watchEffect,
} from "vue";
import cardBg from "@/components/basicComponents/cell/card/cardBg.vue";
import { getDownLoadRequestHeaders } from "@/utils/api/user/header";
import { ElMessage, UploadProps, UploadUserFile } from "element-plus";
import { post, get, del, download as Download, getPreUrl } from "@/utils/api/requests";
import { ElLoading } from "element-plus";
import { loadEnv } from "@build/index";

let VITE_PROXY_DOMAIN_REAL = getPreUrl();
defineOptions({
  name: "uploadFileList",
});
const props = defineProps({
  accept: {
    type: String,
    default: "",
  },
  modelValue: {
    type: String,
    default: () => {
      return JSON.stringify([] as UploadUserFile[]);
    },
  },
  action: {
    type: String,
    default: "/cult/sysFile/upload",
  },
  limit: {
    type: Number,
    default: 3,
  },
});

const fileList = ref([]);

onMounted(() => {
  console.log(props.modelValue, "lplp");
  if (props.modelValue && props.modelValue.length > 0)
    try {
      fileList.value = JSON.parse(props.modelValue) as UploadUserFile[];
    } catch {
      fileList.value = props.modelValue.split(",").map((x) => {
        return {
          name: x,
          url: x,
        };
      }) as UploadUserFile[];
    }
});

const loading = ref<any>({});

let uploadNum = 0;

const beforeUpload = (e) => {
  uploadNum++;
  // loading.value = ElLoading.service({
  //   fullscreen: true,
  //   text: "正在上传中",
  // });
};
const handleExceed = (e) => {};

const success = (e) => {
  console.log(e, "kkkk");
  if (uploadNum) uploadNum--;
  // if (uploadNum == 0) loading.value.close();
  else {
    // loading.value.close();
    // loading.value = ElLoading.service({
    //   fullscreen: true,
    //   text: `正在上传中，剩余文件${uploadNum}`,
    // });
  }
  if (e["message"] == "成功") {
    if (uploadNum == 0)
      ElMessage({
        message: "上传成功",
        type: "success",
      });
    fileList.value.push({
      bizType: "LAND",
      id: e.data,
    });
    // console.log(e.data,'plplplp');
    console.log(fileList.value, "fffff");

    // fileList.value = fileList.value.concat([e.data]);
    // fileList.value = e.data;
  } else {
    let tips = "上传" + e.message ? e.message : "失败";
    if (e.message.includes("Maximum")) {
      tips = "文件过大";
    }
    ElMessage({
      message: tips,
      type: "error",
    });
  }
};

const download = (file) => {
  console.log(file, "lllplplp");
  Download("/cult/dataFile/downFile?id=" + file.id, file.name, {});
};

const remove = (e) => {
  fileList.value = fileList.value.filter((x) => x.id != e.response.data);
};

const emit = defineEmits(["update:modelValue"]);

watchEffect(() => {
  if (fileList.value && fileList.value.length > 0) {
    console.log(props.limit);
    emit("update:modelValue", fileList.value);
  }
});
</script>

<template>
  <div class="wholeBox">
    <el-upload
      :headers="getDownLoadRequestHeaders()"
      :action="VITE_PROXY_DOMAIN_REAL + action"
      :multiple="true"
      :show-file-list="true"
      :before-upload="beforeUpload"
      :on-success="success"
      :on-remove="remove"
      :on-error="
        () =>
          success({
            messgae: '上传失败',
          })
      "
      v-model="fileList"
      :limit="limit"
    >
      <!-- v-model="fileList"  -->
      <el-button icon="upload"> 上传文件 </el-button>
    </el-upload>
    <div class="flexBox" v-for="(file, i) in fileList" :key="i">
      <div class="flexName">{{ file.name }}</div>
      <div class="btnList">
        <el-button
          size="small"
          class="btn"
          type="primary"
          icon="Download"
          @click="download({ id: file.id, name: file.name })"
        >
          下载
        </el-button>
        <el-button
          size="small"
          class="btn"
          type="danger"
          icon="Delete"
          @click="remove(i)"
        ></el-button>
      </div>
    </div>
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
  .flexName {
    width: calc(100% - 80px);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .btnList {
    width: 80px;
    .btn {
      margin-left: 3px;
      padding: 2px;
    }
  }
}
</style>
