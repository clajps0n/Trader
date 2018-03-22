import { TraderPage } from './app.po';

describe('trader App', () => {
  let page: TraderPage;

  beforeEach(() => {
    page = new TraderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
