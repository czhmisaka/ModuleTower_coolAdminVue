<!--
 * @Date: 2022-01-22 19:23:46
 * @LastEditors: CZH
 * @LastEditTime: 2023-05-28 11:37:51
 * @FilePath: /cool-admin-vue/src/modules/moduleTower/components/cell/icon/iconCell.vue
-->
<script lang="tsx">
import { getIcon } from "./../../grid/module/util";
import { ElIcon } from "element-plus";
import { defineComponent, h, toRefs } from "vue";
import cardBg from "../..//cell/card/cardBg.vue";
import { baseComponents } from "../..//grid/module/gridCard/baseCardComponentMixins";

export default defineComponent({
  mixins: [baseComponents],
  name: "IconCell",
  props: {
    name: {
      type: String,
    },
    iconOption: {
      type: Object,
      default: () => {
        return {};
      },
    },
    sizeUnit: {
      type: Object,
      default: () => {
        return {};
      },
    },
    isLoadingIcon: {
      type: Boolean,
      default: false,
    },
    detail: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  setup: (props, context) => {
    const { sizeUnit, isLoadingIcon, iconOption, detail } = toRefs(props);
    let length = 1;
    if (detail.value && "gridInfo" in detail.value)
      length =
        detail.value.gridInfo.default.size.width >
        detail.value.gridInfo.default.size.height
          ? detail.value.gridInfo.default.size.height
          : detail.value.gridInfo.default.size.width;
    context.emit("ready");
    return () =>
      h(cardBg, {}, () => [
        h(
          ElIcon,
          {
            style: {
              background: "url(" + length * sizeUnit.value.blockSize + ".jpg)",
              margin: length * sizeUnit.value.blockSize * 0.25 + "px",
              fontSize: length * sizeUnit.value.blockSize * 0.5 + "px",
              ...iconOption.value,
            },
            color: iconOption.value.color ? iconOption.value.color : "",
            class: [isLoadingIcon.value ? "is-loading" : ""],
          },
          () => h(getIcon(props.name + ""))
        ),
      ]);
  },
});
</script>
