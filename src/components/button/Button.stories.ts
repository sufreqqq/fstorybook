import { StoryFn, Meta } from "@storybook/vue3";
import Button from "./Button.vue";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    disabled: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg", "xl", "2xl"],
      defaultValue: "md",
    },
    type: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary", "link"],
      defaultValue: "primary",
    },
    text: {
      control: {type: "text"},
      defaultValue: "Button"
    },
    iconLeft: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    iconRight: {
      control: { type: "boolean" },
      defaultValue: false,
    }
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: `
    <div style="display: flex; flex-direction: row; gap: 12px;">
      <Button v-bind="args"/>
    </div>
  `,
});

export const DefaultButton: StoryFn<typeof Button> = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: `
  <div style="display: flex; flex-direction: row; gap: 12px;">
    <Button v-bind="args" type="primary">Primary</Button>
    <Button v-bind="args" type="secondary">Secondary</Button>
    <Button v-bind="args" type="tertiary">Tertiary</Button>
    <Button v-bind="args" type="link">Link</Button>
  </div>
`,
});

export const PrimaryButton = Template.bind({});
PrimaryButton.args = { type: "primary" };

export const SecondaryButton = Template.bind({});
SecondaryButton.args = { type: "secondary" };

export const TertiaryButton = Template.bind({});
TertiaryButton.args = { type: "tertiary" };

export const LinkButton = Template.bind({});
LinkButton.args = { type: "link" };
