import { StoryFn, Meta } from "@storybook/vue3";
import Shadows from "./Shadows.vue";

export default {
  title: "Shadows",
  component: Shadows,
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl"],
      defaultValue: "md",
    },
  },
} as Meta<typeof Text>;

const Template: StoryFn<typeof Text> = (args) => ({
  components: { Shadows },
  setup() {
    return { args };
  },
  template: `
    <div style="display: flex; gap: 64px;">
        <Shadows size="xs"/>
        <Shadows size="sm"/>
        <Shadows size="md"/>
        <Shadows size="lg"/>
        <Shadows size="xl"/>
        <Shadows size="2xl"/>
        <Shadows size="3xl"/>
    </div>
  `,
});

export const DefaultShadow = Template.bind({});