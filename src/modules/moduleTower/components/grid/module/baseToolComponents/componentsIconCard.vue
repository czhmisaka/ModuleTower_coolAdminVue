<!--
 * @Date: 2022-07-24 15:31:57
 * @LastEditors: CZH
 * @LastEditTime: 2023-06-19 18:13:40
 * @FilePath: /cool-admin-vue/src/modules/moduleTower/components/grid/module/baseToolComponents/componentsIconCard.vue
-->
<template>
  <cardBg>
    {{ cardComponents.name }}
  </cardBg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import cardBg from "/$/moduleTower/components/cell/card/cardBg.vue";

export default defineComponent({
  props: ["cardComponents", "sizeUnit"],
  components: { cardBg },
});
</script>
