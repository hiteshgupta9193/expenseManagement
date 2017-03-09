import { ExpenseManagementPage } from './app.po';

describe('expense-management App', () => {
  let page: ExpenseManagementPage;

  beforeEach(() => {
    page = new ExpenseManagementPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
