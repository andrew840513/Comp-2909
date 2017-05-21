import { TeestPage } from './app.po';

describe('teest App', () => {
  let page: TeestPage;

  beforeEach(() => {
    page = new TeestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
