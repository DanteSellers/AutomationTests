import { Locator, Page } from "@playwright/test";
export default class AdminLoginPageLocators {
  public adminUsernameBox: Locator;
  public adminPasswordBox: Locator;
  public adminSignInButton: Locator;
  public signInErrorMessage: Locator;

  constructor(public page: Page) {
    this.adminUsernameBox = this.page.locator("#cphMain_txtUser");
    this.adminPasswordBox = this.page.locator("#cphMain_txtKey");
    this.adminSignInButton = this.page.locator("#LoginButton");
    this.signInErrorMessage = this.page.locator("#cphMain_errLogin");
  }
}
