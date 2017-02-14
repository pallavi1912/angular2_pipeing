import { Angular2PipeingPage } from './app.po';

describe('angular2-pipeing App', function() {
  let page: Angular2PipeingPage;

  beforeEach(() => {
    page = new Angular2PipeingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
