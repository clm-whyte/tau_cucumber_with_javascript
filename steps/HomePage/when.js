import { When } from "cucumber";
import googleSearch from "../../support/actions/search";

When(/^the user enters "(.*)" into the search bar$/, (keyword) => {
  googleSearch(keyword);
});
