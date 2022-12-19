import { Page, Locator } from "@playwright/test";

export default class AdminLoginPage {
  readonly adminUsernameBox: Locator;
  readonly adminPasswordBox: Locator;
  readonly adminSignInButton: Locator;
  readonly signInErrorMessage: Locator;

  constructor(public page: Page) {
    this.adminUsernameBox = this.page.locator("#cphMain_txtUser");
    this.adminPasswordBox = this.page.locator("#cphMain_txtKey");
    this.adminSignInButton = this.page.locator("#LoginButton");
    this.signInErrorMessage = this.page.locator("#cphMain_errLogin");
  }

  async enterAdminUsername(username: string) {
    await this.adminUsernameBox.fill(username);
  }

  async enterAdminPassword(password: string) {
    await this.adminPasswordBox.fill(password);
  }

  async clickAdminSignIn() {
    await this.adminSignInButton.click();
  }

  async loginAsAdmin(username: string, password: string) {
    await this.enterAdminUsername(username);
    await this.enterAdminPassword(password);
    await this.clickAdminSignIn();
  }
}
