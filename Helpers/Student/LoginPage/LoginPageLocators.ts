import { Locator, Page } from "@playwright/test";
export default class LoginPageLocators {
  //think it can be declared as const
  public usernameBox: Locator;
  public passwordBox: Locator;
  public signInButton: Locator;
  public invalidLoginError: Locator;

  constructor(public page: Page) {
    this.usernameBox = this.page.locator("#body_UsernameTxtBox");
    this.passwordBox = this.page.locator("#body_PasswordTxtBox");
    this.signInButton = this.page.locator("#body_signInButton");
    this.invalidLoginError = this.page.locator("#body_pError");
  }
}
