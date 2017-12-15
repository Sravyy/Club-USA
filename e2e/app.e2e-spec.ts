import { ClubUsaPage } from './app.po';

describe('club-usa App', () => {
  let page: ClubUsaPage;

  beforeEach(() => {
    page = new ClubUsaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
