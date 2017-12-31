import { StringsPage } from './app.po';

describe('strings App', () => {
  let page: StringsPage;

  beforeEach(() => {
    page = new StringsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
