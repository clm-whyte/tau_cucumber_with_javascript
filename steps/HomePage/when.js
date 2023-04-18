import { When } from "cucumber";
import search from "../../support/actions/search";

When(/^the user enters "(.*)" into the search bar$/, (keyword) => {
  //   Accept cookies first
  $("#L2AGLb").waitForDisplayed(5000);
  $("#L2AGLb").click();

  search(keyword, $(".gLFyf"), $(".aajZCb .gNO89b"));
});
