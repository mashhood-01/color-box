import { ColorBoxPage } from './app.po';

describe('color-box App', function() {
  let page: ColorBoxPage;

  beforeEach(() => {
    page = new ColorBoxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
