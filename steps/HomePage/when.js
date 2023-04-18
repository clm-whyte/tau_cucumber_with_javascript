import { When } from "cucumber";

When(/^the user enters "(.*)" into the search bar$/, (keyword) => {
  $("#L2AGLb").waitForDisplayed(5000);
  $("#L2AGLb").click();
  $(".gLFyf").waitForDisplayed(5000);
  $(".gLFyf").click();
  $(".gLFyf").setValue(keyword);
  $(".aajZCb .gNO89b").waitForDisplayed(5000);
  $(".aajZCb .gNO89b").click();
});
