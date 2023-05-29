<!--
 * @Date: 2022-05-29 11:25:08
 * @LastEditors: CZH
 * @LastEditTime: 2023-05-28 13:34:38
 * @FilePath: /cool-admin-vue/src/modules/moduleTower/components/grid/module/baseToolComponents/editable.vue
-->
<script lang="ts">
import { defineComponent, h } from "vue";
import { baseComponents } from "../../module/gridCard/baseCardComponentMixins";
import cardBg from "../../cell/card/cardBg.vue";
import iconCell from "../../cell/icon/iconCell.vue";
import { setData } from "../cardApi/index";
export default defineComponent({
  mixins: [baseComponents],
  props: ["sizeUnit", "detail", "baseData"],
  setup(props, context) {
    context.emit("ready");
    return () => [
      h(
        cardBg,
        {
          ondblclick: (e: any) => {
            setData(context, {
              editable: !props.baseData.editable,
            });
          },
          ontouchend: (e: any) => {
            setData(context, {
              editable: !props.baseData.editable,
            });
          },
          style: {
            cursor: "pointer",
          },
        },
        () =>
          h(iconCell, {
            name: !props.baseData.editable ? "Lock" : "Unlock",
            sizeUnit: props.sizeUnit,
            detail: props.detail,
          })
      ),
    ];
  },
});
</script>
