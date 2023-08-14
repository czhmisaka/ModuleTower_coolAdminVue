<!--
 * @Date: 2022-05-18 23:06:49
 * @LastEditors: CZH
 * @LastEditTime: 2023-08-14 18:04:04
 * @FilePath: /cool-admin-vue/src/modules/moduleTower/components/cell/card/cardBg.vue
-->

<script lang="ts">
import { defineComponent, h, ref } from "vue";

export default defineComponent({
  props: {
    cusStyle: {
      type: Object,
      default: () => {
        return {} as { [key: string]: any };
      },
    },
    title: {
      type: String,
      default: "",
    },
  },
  setup(props, context) {
    const { slots } = context;
    const isDark = ref(false);
    return () =>
      h(
        "div",
        {
          class: isDark.value ? "" : "shadow_bg",
          style: {
            boxSizing: "border-box",
            width: "100%",
            height: "100%",
            background: isDark.value ? "#020409" : "#FFFFFF",
            borderRadius: "6px",
            overflow: "hidden",
            ...props.cusStyle,
          },
        },
        { default: () => slots.default?.(props, context) }
      );
  },
});
</script>
<style lang="scss" scoped>
.shadow_bg_1 {
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.05));
}
</style>
