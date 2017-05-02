import { Ng4RecipesPage } from './app.po';

describe('ng4-recipes App', () => {
  let page: Ng4RecipesPage;

  beforeEach(() => {
    page = new Ng4RecipesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
