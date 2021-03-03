const {Builder} = require("selenium-webdriver");

const driver = new Builder().forBrowser('opera').build();

driver.get("https://twitter.com")