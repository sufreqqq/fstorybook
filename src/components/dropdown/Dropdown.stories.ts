import { StoryFn, Meta } from "@storybook/vue3";
import Dropdown from "./Dropdown.vue";

export default {
  title: "Dropdown",
  component: Dropdown,
  argTypes: {
    disabled: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    options: {
      control: { type: "object" },
      defaultValue: [
        {
          label: "Option 1",
          value: "option1",
          type: "default",
          icon: "help",
        },
        {
          label: "Option 2",
          value: "option1",
          type: "default",
          icon: "help",
        },
        {
          label: "Option 3",
          value: "option1",
          type: "default",
          icon: "help",
        },
      ],
    },
    isError: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    label: {
      control: { type: "text" },
      defaultValue: "Почта",
    },
    iconLeading: {
      control: { type: "boolean" },
      defaultValue: false,
    },
  },
} as Meta<typeof Dropdown>;

const Template: StoryFn<typeof Dropdown> = (args) => ({
  components: { Dropdown },
  setup() {
    return { args };
  },
  template: `
    <div style="display: flex; flex-direction: row;">
      <Dropdown v-bind="args"/>
    </div>
  `,
});

export const DefaultDropdown = Template.bind({});

DefaultDropdown.args = {
  options: [
    {
      label: "Option 1",
      value: "option1",
      type: "withicon",
      icon: "help",
    },
    {
      label: "Option 2",
      value: "option1",
      type: "default",
      icon: "help",
    },
    {
      label: "Option 3",
      value: "option1",
      type: "disabled",
      icon: "help",
    },
    {
      label: "Option 4",
      value: "option1",
      type: "disabled",
      icon: "help",
    },
  ],
};
