<script lang="ts" setup>
import { ref, computed, PropType } from "vue";

// Define props
const props = defineProps({
    options: {
        type: Array as PropType<
            Array<{ label: string; value: string; type: string; icon?: string }>
        >,
        required: true,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    placeholder: {
        type: String,
        default: "Выберите пункт списка",
    },
    label: {
        type: String,
        default: "Лейбл",
    },
    isError: {
        type: Boolean,
        default: false,
    },
    hint: {
        type: String,
        default: "Дополнительный текст",
    },
    errorMessage: {
        type: String,
        default: "Ошибка",
    },
    iconLeading: {
        type: Boolean,
        default: false,
    },
});

// Define emits
const emit = defineEmits(["selection-changed"]);
const classError = computed(() => "dropdown-error");

// Reactive state
const isOpen = ref(false);
const selectedOption = ref("");

// Group and sort options
const sortedOptions = computed(() => {
    const withIcon = props.options.filter((o: any) => o.type === "withicon");
    const active = props.options.filter((o: any) => o.type === "default");
    const disabled = props.options.filter((o: any) => o.type === "disabled");
    return { withIcon, active, disabled };
});

// Methods
const toggleDropdown = () => {
    if (props.disabled) return
    isOpen.value = !isOpen.value;
};

const selectOption = (option: string) => {
    selectedOption.value = option;
    isOpen.value = false;
    emit("selection-changed", option);
};
</script>

<template>
    <div class="dropdown">
        <label for="dropdown" :style="[label ? '' : 'display: none']">{{ label }}</label>
        <div :class="[isError ? classError : '', iconLeading ? 'dropdown-leading' : '', disabled ? 'disabled' : '']"
            class="dropdown-selected" @click="toggleDropdown">
            <template v-if="iconLeading">
                <span class="dropdown-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M10 3.33333C8.61929 3.33333 7.5 4.45262 7.5 5.83333C7.5 7.21404 8.61929 8.33333 10 8.33333C11.3807 8.33333 12.5 7.21404 12.5 5.83333C12.5 4.45262 11.3807 3.33333 10 3.33333ZM5.83333 5.83333C5.83333 3.53214 7.69881 1.66666 10 1.66666C12.3012 1.66666 14.1667 3.53214 14.1667 5.83333C14.1667 8.13452 12.3012 10 10 10C7.69881 10 5.83333 8.13452 5.83333 5.83333ZM3.72039 12.8871C4.50179 12.1057 5.5616 11.6667 6.66667 11.6667H13.3333C14.4384 11.6667 15.4982 12.1057 16.2796 12.8871C17.061 13.6685 17.5 14.7283 17.5 15.8333V17.5C17.5 17.9602 17.1269 18.3333 16.6667 18.3333C16.2064 18.3333 15.8333 17.9602 15.8333 17.5V15.8333C15.8333 15.1703 15.5699 14.5344 15.1011 14.0656C14.6323 13.5967 13.9964 13.3333 13.3333 13.3333H6.66667C6.00363 13.3333 5.36774 13.5967 4.8989 14.0656C4.43006 14.5344 4.16667 15.1703 4.16667 15.8333V17.5C4.16667 17.9602 3.79357 18.3333 3.33333 18.3333C2.8731 18.3333 2.5 17.9602 2.5 17.5V15.8333C2.5 14.7283 2.93899 13.6685 3.72039 12.8871Z"
                            fill="#101828" />
                    </svg>
                </span>
            </template>
            {{ selectedOption || placeholder }}
            <span class="dropdown-arrow" :class="[isOpen ? 'arrow-up' : '']"></span>
        </div>

        <!-- Dropdown List -->
        <ul class="dropdown-list" v-if="isOpen">
            <!-- With Icon Group -->
            <template v-if="sortedOptions.withIcon.length">
                <li v-for="(option, index) in sortedOptions.withIcon" :key="'withicon-' + index"
                    class="dropdown-item withicon" @click.stop="selectOption(option.value)">
                    {{ option.label }}
                    <div style="display: flex; align-items: center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24"
                            style="fill:#64748B ">
                            <path
                                d="M6 14c-2.206 0-4 1.794-4 4s1.794 4 4 4a4.003 4.003 0 0 0 3.998-3.98H10V16h4v2.039h.004A4.002 4.002 0 0 0 18 22c2.206 0 4-1.794 4-4s-1.794-4-4-4h-2v-4h2c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4v2h-4V5.98h-.002A4.003 4.003 0 0 0 6 2C3.794 2 2 3.794 2 6s1.794 4 4 4h2v4H6zm2 4c0 1.122-.879 2-2 2s-2-.878-2-2 .879-2 2-2h2v2zm10-2c1.121 0 2 .878 2 2s-.879 2-2 2-2-.878-2-2v-2h2zM16 6c0-1.122.879-2 2-2s2 .878 2 2-.879 2-2 2h-2V6zM6 8c-1.121 0-2-.878-2-2s.879-2 2-2 2 .878 2 2v2H6zm4 2h4v4h-4v-4z">
                            </path>
                        </svg>
                        <p style="font-size: 12px; font-weight: 400; color: #64748B">С</p>
                    </div>
                </li>
                <li class="dropdown-divider"></li>
            </template>

            <!-- Active Group -->
            <template v-if="sortedOptions.active.length">
                <li v-for="(option, index) in sortedOptions.active" :key="'active-' + index"
                    class="dropdown-item active" @click.stop="selectOption(option.value)">
                    {{ option.label }}
                </li>
                <li class="dropdown-divider"></li>
            </template>

            <!-- Disabled Group -->
            <template v-if="sortedOptions.disabled.length">
                <li v-for="(option, index) in sortedOptions.disabled" :key="'disabled-' + index"
                    class="dropdown-item disabled">
                    {{ option.label }}
                </li>
            </template>
        </ul>
        <p :class="[isError ? 'hint-error' : 'hint']"
            :style="[hint ? '' : 'display: none', errorMessage ? '' : 'display: none', isOpen ? 'display: none' : '']">
            {{
                isError ? errorMessage : hint
            }}</p>
    </div>
</template>

<style scoped>
@import "../style.css";
</style>