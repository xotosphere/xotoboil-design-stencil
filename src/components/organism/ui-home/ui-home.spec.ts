import { newSpecPage } from '@stencil/core/testing';
import { UiHome } from './ui-home';

describe('ui-home', () => {
  it('renders with values', async () => {
    const { root } = await newSpecPage({ components: [UiHome], html: `<ui-home text="header text"/>` });

    expect(root).toEqualHtml(`
      <ui-home text="header text">
        <mock:shadow-root>
          <div class="ui-home">
            <div class="ui-home__header">
              header text
            </div>
            <div class="ui-home__content">
              <slot name="content" v-bind="scope">
            </div>
          </div>
        </mock:shadow-root>
      </ui-home>
    `);
  });
});
