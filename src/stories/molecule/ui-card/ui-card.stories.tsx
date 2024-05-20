import { h } from "jsx-dom";
import { action } from "@storybook/addon-actions";

export default {
  title: "stories/molecule/UiCard",
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: "text",
      description: "text of the card",
      type: { summary: "string" },
      defaultValue: { summary: "card" },
    },
  },
  args: {
    text: "card",
  },
  parameters: {
    cssprops: {
      "ui-custom-card-color": {
        value: "rgb(109, 118, 178)",
        control: "color",
        description: "color of the card",
      },
    },
  },
};

const Template = (args) => (
  <ui-card text={args.text}>
    <ui-button
      slot="action"
      text="select"
      onClick={() => action("button-select")(args.text)}
    />
  </ui-card>
);

export const UiCard = Template.bind({});
