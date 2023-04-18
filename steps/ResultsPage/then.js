import { Then } from "cucumber";
import verifyLinksContain from "../../support/assertions/verifyLinksContain";

Then(/^links related to "(.*)" are shown on the results page$/, (keyword) => {
  const links = $$(".LC20lb");
  verifyLinksContain(links, keyword);
});
