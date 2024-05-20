import { newSpecPage } from '@stencil/core/testing';
import { UiCard } from './ui-card';

describe('ui-card', () => {
  it('renders with values', async () => {
    const page = await newSpecPage({
      components: [UiCard],
      html: `<ui-card text="card text"/>`,
    });
    expect(page.root).toEqualHtml(`
      <ui-card text="card text">
        <mock:shadow-root>
          <div class="ui-card">
            <div class="ui-card__header">card text</div>
            <div class="ui-card__action"><slot name="action" v-bind="scope"></div>
          </div>
        </mock:shadow-root>
      </ui-card>
    `);
  });
});
