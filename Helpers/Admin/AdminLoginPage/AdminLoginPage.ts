import { Page } from "@playwright/test";
import AdminLoginPageLocators from "./AdminLoginPageLocators";

export default class AdminLoginPage {
  locators: AdminLoginPageLocators;

  constructor(public page: Page) {
    this.locators = new AdminLoginPageLocators(page);
  }

  async enterAdminUsername(username: string) {
    await this.locators.adminUsernameBox.fill(username);
  }

  async enterAdminPassword(password: string) {
    await this.locators.adminPasswordBox.fill(password);
  }

  async clickAdminSignIn() {
    await this.locators.adminSignInButton.click();
  }

  async loginAsAdmin(username: string, password: string) {
    await this.enterAdminUsername(username);
    await this.enterAdminPassword(password);
    await this.clickAdminSignIn();
  }
}
