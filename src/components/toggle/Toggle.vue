<script lang="ts" setup>
import { defineProps, defineEmits, computed, PropType } from "vue";

// Define component props
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<"sm" | "md">,
    default: "md",
  },
  text: {
    type: String,
    default: "Remember me",
  },
  textSupport: {
    type: String,
    default: "Save my login details for next time.",
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue']);
// Computed properties
const backgroundStyles = computed(() => ({
  "toggle-on": props.modelValue,
  "toggle-bg": !props.modelValue,
}));

const indicatorStyles = computed(() => ({
  transform: props.modelValue ? "translateX(16px)" : "translateX(0)",
}));

// Toggle function
const toggle = () => {
  emit('update:modelValue', !props.modelValue);
};
</script>

<template>
  <span class="toggle-wrapper" role="checkbox" :aria-checked="props.modelValue" tabindex="0" :value="props.modelValue"
    @click="toggle" @keydown.space.prevent="toggle">
    <span class="toggle-background" :class="backgroundStyles" />
    <span class="toggle-indicator" :style="indicatorStyles" />
  </span>
  <div>
    <p class="toggle-text bold">{{ text }}</p>
    <p name="toggle-text-support">{{ textSupport }}</p>
  </div>
</template>

<style scoped>
@import "../style.css";
</style>