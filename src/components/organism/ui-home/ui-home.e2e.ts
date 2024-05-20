import { newE2EPage } from '@stencil/core/testing';

describe('ui-home', () => {
  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<ui-home></ui-home>');
    const component = await page.find('ui-home');
    const element = await page.find('ui-home >>> div');

    component.setProperty('text', 'header text');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`header text`);

  });
});
