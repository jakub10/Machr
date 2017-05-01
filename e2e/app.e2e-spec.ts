import { MachrPage } from './app.po';

describe('machr App', () => {
  let page: MachrPage;

  beforeEach(() => {
    page = new MachrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
