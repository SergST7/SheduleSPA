import { SheduleSpaPage } from './app.po';

describe('shedule-spa App', () => {
  let page: SheduleSpaPage;

  beforeEach(() => {
    page = new SheduleSpaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
