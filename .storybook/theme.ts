import {create} from '@storybook/theming/create';

export default create({
  base: 'light',
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',
  brandTitle: 'My custom Storybook',
  brandUrl: 'https://example.com',
  brandImage: './example.png',
  brandTarget: '_self'
});
