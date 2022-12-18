import { Page } from "@playwright/test";
import LoginPageLocators from "./LoginPageLocators";

export default class LoginPage {
  locators: LoginPageLocators;

  constructor(public page: Page) {
    this.locators = new LoginPageLocators(page);
  }

  async enterUsername(username: string) {
    await this.locators.usernameBox.fill(username);
  }

  async enterPassword(password: string) {
    await this.locators.passwordBox.fill(password);
  }

  async clickSignIn() {
    await this.locators.signInButton.click();
  }

  async loginAsStudent(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickSignIn();
  }
}
