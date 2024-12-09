<script lang="ts" setup>
import { defineProps, computed, PropType } from "vue";

// Определяем свойства компонента
const props = defineProps({
  size: {
    type: String as PropType<"sm" | "md" | "lg">,
    default: "md",
  },
  type: {
    type: String as PropType<"display" | "body" | "description" | "heading">,
    default: "display",
  },
  text: {
    type: String,
    default: "Fplus Design System",
  }
});

// Вычисляемые классы для стилей
const textClass = computed(() => `${props.type}-${props.size}`);
</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 8px">
    <component :is="props.type === 'heading' ? 'h1' : 'p'" :class="[textClass]">
      <slot>{{ props.text }}</slot>
    </component>
    <component :is="props.type !== 'heading' ? 'p' : null" :class="[textClass, 'bold']">
      <slot>{{ props.text }}</slot>
    </component>
  </div>
</template>

<style scoped>
@import "../style.css";
</style>