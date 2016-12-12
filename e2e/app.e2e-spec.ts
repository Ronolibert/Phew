import { PhewPage } from './app.po';

describe('phew App', function() {
  let page: PhewPage;

  beforeEach(() => {
    page = new PhewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
