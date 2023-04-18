import { Given } from "cucumber";
import acceptCookies from "../../support/actions/acceptCookies";
import goToURL from "../../support/actions/goToURL";

Given("a web browser is at the Google home page", () => {
  goToURL("/");
  acceptCookies($("#L2AGLb"));
});
