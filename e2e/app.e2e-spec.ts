import { LadyleetPage } from './app.po';

describe('ladyleet App', function() {
  let page: LadyleetPage;

  beforeEach(() => {
    page = new LadyleetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
