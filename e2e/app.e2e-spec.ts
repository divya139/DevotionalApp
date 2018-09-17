import { DevotionaAppPage } from './app.po';

describe('devotiona-app App', function() {
  let page: DevotionaAppPage;

  beforeEach(() => {
    page = new DevotionaAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
