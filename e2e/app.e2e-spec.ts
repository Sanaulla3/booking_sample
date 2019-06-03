import { QuickBootPage } from './app.po';

describe('quick-boot App', () => {
  let page: QuickBootPage;

  beforeEach(() => {
    page = new QuickBootPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
