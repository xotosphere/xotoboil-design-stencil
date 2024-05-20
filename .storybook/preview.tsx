import { defineCustomElements } from '../loader';
import readme from './readme.mdx';

defineCustomElements();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: { default: 'light' },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    hierarchySeparator: /\//,
    hierarchyRootSeparator: '|',
    storySort: {
      method: 'alphabetical',
      order: [ 'intro', ['readme', 'changelog', 'style'], 'plugin', 'organisme', 'molecule', 'atom' ],
      locales: 'en-US',
    },
  },
  docs: {
    page: readme,
    toc: {
      headingSelector: 'h1, h2, h3',
      ignoreSelector: '#primary',
      title: 'table of contents',
      disable: false,
      unsafeTocbotOptions: {
        orderedList: false,
      },
    },
  },
}
