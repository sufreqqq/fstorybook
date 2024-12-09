import { StoryFn, Meta } from "@storybook/vue3";
import Toggle from "./Toggle.vue";

export default {
  title: "Toggle",
  component: Toggle,
  argTypes: {
    disabled: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    size: {
      control: { type: "radio" },
      options: ["sm", "md"],
      defaultValue: "md",
    },
    text: {
        control: { type: "text" },
        defaultValue: "Remember me",
    },
    textSupport: {
        control: { type: "text" },
        defaultValue: "Save my login details for next time.",
    },
    modelValue: {
      control: { type: "boolean" },
      defaultValue: false
    }
  },
} as Meta<typeof Toggle>;

const Template: StoryFn<typeof Toggle> = (args) => ({
  components: { Toggle },
  setup() {
    return { args };
  },
  template: `
    <div style="display: flex; flex-direction: row; gap: 12px;">
      <Toggle v-bind="args" @update:modelValue="modelValue = $event" />
    </div>
  `,
});

export const DefaultToggle: StoryFn<typeof Toggle> = (args) => ({
  components: { Toggle },
  setup() {
    return { args };
  },
  template: `
  <div style="display: flex; flex-direction: row; gap: 12px;">
    <Toggle v-bind="args" v-model="args.modelValue" />
  </div>
`,
});
