import { h } from "jsx-dom";
import { action } from "@storybook/addon-actions";

export default {
  title: "stories/organism/UiHome",
  tags: ["autodocs"],
  argTypes: { text: { type: { summary: "string" }, description: "text of the header", defaultValue: { summary: "header text" }, control: "text", }, },
  args: { text: "header text", },
  parameters: { cssprops: { "ui-custom-home-color": { value: "rgb(224, 224, 224)", control: "color", description: "color of the page", }, }, },
};

const Template = (args) => (
  <ui-home text={args.text}>
    <ui-card slot="content" text="card text">
      <ui-button slot="action" text="select" onClick={() => action("button-select")(args.text)} />
    </ui-card>
  </ui-home>
);

export const UiHome = Template.bind({});
