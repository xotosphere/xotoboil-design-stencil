import { newE2EPage } from '@stencil/core/testing';

describe('ui-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ui-card text="card text"/>');
    const element = await page.find('ui-card');
    expect(element).toHaveClass('hydrated');
  });
});
