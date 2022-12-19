import { Page, Locator } from "@playwright/test";

export default class LoginPage {
  readonly usernameBox: Locator;
  readonly passwordBox: Locator;
  readonly signInButton: Locator;
  readonly invalidLoginError: Locator;

  constructor(public page: Page) {
    this.usernameBox = this.page.locator("#body_UsernameTxtBox");
    this.passwordBox = this.page.locator("#body_PasswordTxtBox");
    this.signInButton = this.page.locator("#body_signInButton");
    this.invalidLoginError = this.page.locator("#body_pError");
  }

  async enterUsername(username: string) {
    await this.usernameBox.fill(username);
  }

  async enterPassword(password: string) {
    await this.passwordBox.fill(password);
  }

  async clickSignIn() {
    await this.signInButton.click();
  }

  async loginAsStudent(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickSignIn();
  }
}
