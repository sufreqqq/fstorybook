<script lang="ts" setup>
import { computed } from "vue";

// Определяем свойства компонента
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  isError: {
    type: Boolean,
    default: false
  },
  errorMessage: {
    type: String,
    default: "Ошибка"
  },
  hint: {
    type: String,
    default: "Сообщение для пользователя"
  },
  value: {
    type: String,
    default: ""
  },
  label: {
    type: String,
    default: "Почта"
  },
  placeholder: {
    type: String,
    default: "olivia@fplus.ru"
  },
  iconLeading: {
    type: Boolean,
    default: false,
  },
  iconHelp: {
    type: Boolean,
    default: false
  }
});
const classError = computed(() => `input-error`);

</script>

<template>
  <div style="display: flex; flex-direction: column;">
    <label>{{ label }}</label>
    <div class="input-container">
      <template v-if="iconLeading">
        <svg class="icon-leading" width="20" height="20" viewBox="0 0 20 20" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18.3333 4.99992C18.3333 4.08325 17.5833 3.33325 16.6666 3.33325H3.33329C2.41663 3.33325 1.66663 4.08325 1.66663 4.99992M18.3333 4.99992V14.9999C18.3333 15.9166 17.5833 16.6666 16.6666 16.6666H3.33329C2.41663 16.6666 1.66663 15.9166 1.66663 14.9999V4.99992M18.3333 4.99992L9.99996 10.8333L1.66663 4.99992"
            stroke="#64748B" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </template>
      <input :class="[isError ? classError : '', iconLeading ? 'input-leading' : '']" :disabled="disabled"
        :placeholder="placeholder" :value="value" />
      <template v-if="iconHelp">
        <svg v-if="!isError" class="icon-help" width="16" height="16" viewBox="0 0 16 16" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_991_852)">
            <path
              d="M6.06004 6.00016C6.21678 5.55461 6.52614 5.1789 6.93334 4.93958C7.34055 4.70027 7.8193 4.61279 8.28483 4.69264C8.75035 4.77249 9.17259 5.01451 9.47676 5.37585C9.78093 5.73718 9.94741 6.19451 9.94671 6.66683C9.94671 8.00016 7.94671 8.66683 7.94671 8.66683M8.00004 11.3335H8.00671M14.6667 8.00016C14.6667 11.6821 11.6819 14.6668 8.00004 14.6668C4.31814 14.6668 1.33337 11.6821 1.33337 8.00016C1.33337 4.31826 4.31814 1.3335 8.00004 1.3335C11.6819 1.3335 14.6667 4.31826 14.6667 8.00016Z"
              :stroke="!isError ? '#64748B' : '#EF4444'" stroke-width="1.33333" stroke-linecap="round"
              stroke-linejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_991_852">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <svg v-if="isError" class="icon-help" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_991_1189)">
            <path
              d="M8.00004 5.3335V8.00016M8.00004 10.6668H8.00671M14.6667 8.00016C14.6667 11.6821 11.6819 14.6668 8.00004 14.6668C4.31814 14.6668 1.33337 11.6821 1.33337 8.00016C1.33337 4.31826 4.31814 1.3335 8.00004 1.3335C11.6819 1.3335 14.6667 4.31826 14.6667 8.00016Z"
              stroke="#DD3B53" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_991_1189">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </template>
    </div>
    <p :class="[isError ? 'hint-error' : 'hint']">{{ isError ? errorMessage : hint }}</p>
  </div>
</template>

<style scoped>
@import "../style.css";
</style>

<!-- TODO: Добавить момент с гиперссылкой -->
<!-- TODO: Добавить textarea -->