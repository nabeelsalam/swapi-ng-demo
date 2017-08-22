import { SwapiDemoPage } from './app.po';

describe('swapi-demo App', () => {
  let page: SwapiDemoPage;

  beforeEach(() => {
    page = new SwapiDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
