/**
 * Accepts all cookies to hide cookie modal on launch
 *
 * @param {object} submitButton WebdriverIO submit button element
 */

export default (submitButton) => {
  submitButton.waitForDisplayed(5000);
  submitButton.click();
};
