import { Given } from "cucumber";
import homePage from "../../pages/Home";
import acceptCookies from "../../support/actions/acceptCookies";
import goToURL from "../../support/actions/goToURL";

Given("a web browser is at the Google home page", () => {
  goToURL(homePage.url);
  acceptCookies($("#L2AGLb"));
});
