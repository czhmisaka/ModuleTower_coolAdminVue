<!--
 * @Date: 2022-05-22 18:23:04
 * @LastEditors: CZH
 * @LastEditTime: 2023-05-28 11:39:20
 * @FilePath: /cool-admin-vue/src/modules/moduleTower/components/cell/info/iframe.vue
-->
<script lang="ts">
import { defineComponent, ref, h, toRefs } from "vue";
import { baseComponents } from "../..//grid/module/gridCard/baseCardComponentMixins";
import cardBg from "../card/cardBg.vue";
import { changeVisible } from "../..//grid/module/cardApi";

export default defineComponent({
  mixins: [baseComponents],
  props: {
    url: String,
    sizeUnit: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  setup(props, context) {
    const { url } = toRefs(props);
    context.emit("ready");
    return () => [
      h(
        cardBg,
        {
          style: {
            width: "100%",
            height: "100%",
            overflow: "hidden",
          },
        },
        () => [
          h("iframe", {
            style: {
              width: "100%",
              height: "100%",
              border: "none",
              overflow: "hidden",
              borderRadius: "12px",
            },
            src: url.value,
            onLoad: () => {
              context.emit("ready");
            },
          }),
        ]
      ),
    ];
  },
});
</script>
