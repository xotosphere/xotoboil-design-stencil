import { h } from 'jsx-dom';
import { action } from '@storybook/addon-actions';

export default {
  title: 'stories/atom/UiButton',
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'text of the button',
      type: { summary: 'string' },
      defaultValue: { summary: 'select' },
    }
  },
  args: {
    text: 'select',
  },
  parameters: {
    cssprops: {
      'ui-custom-button-color': { value: 'rgb(0, 169, 79)', control: 'color', description: 'color of the page' }
    },
  },
};

const Template = (args) => (
  <ui-button text={args.text} onClick={() => action('button-select')(args.text)} />
);

export const UiButton = Template.bind({});
