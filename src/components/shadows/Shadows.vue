<script lang="ts" setup>
import { defineProps, computed, PropType } from "vue";

// Определяем свойства компонента
const props = defineProps({
  size: {
    type: String as PropType<"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl">,
    default: "xs",
  },
});

// Вычисляемые классы для стилей
const shadowSize = computed(() => `shadow-${props.size}`);
</script>

<template>
  <div class="shadow-block" :class="shadowSize">
    <p>{{ shadowSize }}</p>
  </div>
</template>

<style scoped>
@import "../style.css";
</style>