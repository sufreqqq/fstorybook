<script lang="ts" setup>
import { defineProps, computed, PropType } from "vue";

// Определяем свойства компонента
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<"sm" | "md" | "lg" | "xl" | "2xl">,
    default: "md",
  },
  type: {
    type: String as PropType<"primary" | "secondary" | "tertiary" | "link">,
    default: "primary",
  },
  text: {
    type: String,
    default: "Button"
  },
  iconLeft: {
    type: Boolean,
    default: false,
  },
  iconRight: {
    type: Boolean,
    default: false
  }
});

// Вычисляемые классы для стилей
const sizeClass = computed(() => `button-${props.size}`);
const typeClass = computed(() => `button-${props.type}`);
</script>

<template>
  <button class="button" :class="[sizeClass, typeClass, 'shadow-xs']" :disabled="props.disabled">
    <slot name="left-icon" style="padding: 14px;" v-if="props.iconLeft">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12H18L15 21L9 3L6 12H2" :style="{stroke: 'currentColor'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </slot>
    <slot>{{ props.text }}</slot>
    <slot name="right-icon" v-if="props.iconRight">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12H18L15 21L9 3L6 12H2" :style="{stroke: 'currentColor'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </slot>
  </button>
</template>

<style scoped>
@import "../style.css";
</style>