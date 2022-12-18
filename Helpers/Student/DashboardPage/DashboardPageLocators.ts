import { Locator, Page } from "@playwright/test";

export default class DashboardPageLocators {
  // list of all items that appear after clicking accountDropdown
  accountDropdown: Locator;
  myAccountButton: Locator;
  redeemCodeButton: Locator;
  themeDropdown: Locator;
  languageDropdown: Locator;
  helpButton: Locator;
  logOutButton: Locator;

  // list of all themes that appear when the Themes dropdown is clicked
  lightTheme: Locator;
  darkTheme: Locator;
  classicTheme: Locator;
  highContrastTheme: Locator;

  constructor(public page: Page) {
    /* All locators that appear when the accountDropdown is click in the top-right corner
        of the student page. The Download button may or may not need to be added to this list
        and this list may need to be updated in the future if more entries are added / removed */
    this.accountDropdown = this.page.locator("#accountButton");
    this.myAccountButton = this.page.locator("#myAccount");
    this.redeemCodeButton = this.page.locator("#redeemCode");
    this.themeDropdown = this.page.locator("#currentTheme");
    this.languageDropdown = this.page.locator("#currentLanguage");
    this.helpButton = this.page.locator("#helpLink");
    this.logOutButton = this.page.locator("#logoutLink");

    /* List of all themes that show up for standard students under the Theme dropdown
        after clicking accountDropdown */
    this.lightTheme = this.page.getByRole("link", { name: "Light" });
    this.darkTheme = this.page.getByRole("link", { name: "Dark" });
    this.classicTheme = this.page.getByRole("link", { name: "Classic" });
    this.highContrastTheme = this.page.getByRole("link", {
      name: "High Contrast",
    });
  }
}
