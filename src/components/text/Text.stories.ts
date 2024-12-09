import { StoryFn, Meta } from "@storybook/vue3";
import Text from "./Text.vue";

export default {
  title: "Text",
  component: Text,
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "ld", "xl", "2xl"],
      defaultValue: "md",
    },
    type: {
      control: { type: "select" },
      options: ["display", "heading", "body", "description"],
      defaultValue: "display"
    },
    text: {
      control: { type: "text" },
      defaultValue: "Text"
    }
  },
} as Meta<typeof Text>;

const Template: StoryFn<typeof Text> = (args) => ({
  components: { Text },
  setup() {
    return { args };
  },
  template: `
    <div style="display: flex; flex-direction: column; gap: 32px;">
      <Text v-bind="args" size="lg"/>
      <Text v-bind="args" size="md"/>
      <Text v-bind="args" size="sm"/>
    </div>
  `,
});

export const DefaultText: StoryFn<typeof Text> = (args) => ({
  components: { Text },
  setup() {
    return { args };
  },
  template: `
  <div style="display: flex; flex-direction: row; gap: 64px">
    <div style="display: flex; flex-direction: column; gap: 32px">
      <Text v-bind="args" type="display" size="lg"/>
      <Text v-bind="args" type="display" size="md"/>
      <Text v-bind="args" type="display" size="sm"/>
    </div>
    <div style="display: flex; flex-direction: column; gap: 32px">
      <Text v-bind="args" type="heading" size="2xl"/>
      <Text v-bind="args" type="heading" size="xl"/>
      <Text v-bind="args" type="heading" size="lg"/>
      <Text v-bind="args" type="heading" size="md"/>
      <Text v-bind="args" type="heading" size="sm"/>
    </div>
    <div style="display: flex; flex-direction: column; gap: 32px">
      <Text v-bind="args" type="body" size="lg"/>  
      <Text v-bind="args" type="body" size="md"/>
      <Text v-bind="args" type="body" size="sm"/>
    </div>
    <div style="display: flex; flex-direction: column; gap: 32px">
      <Text v-bind="args" type="description" size="lg"/>
      <Text v-bind="args" type="description" size="md"/>
      <Text v-bind="args" type="description" size="sm"/>
    </div>
  </div>
`,
});

export const DisplayText = Template.bind({});
DisplayText.args = { type: "display" };

export const HeadingText: StoryFn<typeof Text> = (args) => ({
  components: { Text },
  setup() {
    return { args };
  },
  template: `
    <div style="display: flex; flex-direction: column; gap: 32px">
      <Text v-bind="args" type="heading" size="2xl"/>
      <Text v-bind="args" type="heading" size="xl"/>
      <Text v-bind="args" type="heading" size="lg"/>
      <Text v-bind="args" type="heading" size="md"/>
      <Text v-bind="args" type="heading" size="sm"/>
    </div>
`,
});

export const BodyText = Template.bind({});
BodyText.args = { type: "body" };

export const DescriptionText = Template.bind({});
DescriptionText.args = { type: "description" };