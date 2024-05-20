import { newSpecPage } from '@stencil/core/testing';
import { UiButton } from './ui-button';

describe('ui-button', () => {
  it('renders with values', async () => {
    const page = await newSpecPage({
      components: [UiButton],
      html: `<ui-button text="select"/>`,
    });
    expect(page.root).toEqualHtml(`
      <ui-button text="select">
        <mock:shadow-root>
          <button>select</button>
        </mock:shadow-root>
      </ui-button>
    `);
  });
});
