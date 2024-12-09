import { StoryFn, Meta } from "@storybook/vue3";
import Input from "./Input.vue";

export default {
  title: "Input",
  component: Input,
  argTypes: {
    disabled: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    hint: {
      control: { type: "text" },
      defaultValue: "Сообщение для пользователя",
    },
    errorMessage: {
      control: { type: "text" },
      defaultValue: "",
    },  
    isError: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    value: {
      control: { type: "text" },
      defaultValue: "",
    },
    label: {
      control: { type: "text" },
      defaultValue: "Почта",
    },
    iconLeading: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    iconHelp: {
      control: { type: "boolean" },
      defaultValue: false,
    }
  },
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => ({
  components: { Input },
  setup() {
    return { args };
  },
  template: `
    <div style="display: flex; flex-direction: row; ">
      <Input v-bind="args"/>
    </div>
  `,
});

export const DefaultInput: StoryFn<typeof Input> = Template.bind({});