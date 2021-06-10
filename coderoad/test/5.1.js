const expect = require("chai").expect;
const fsPromises = require("fs").promises;
const sinon = require("sinon");

const SwagPagePath = "../cypress/pageobjects/SwagOverviewPage.js";
const SwagPage = require("../../cypress/pageobjects/SwagOverviewPage.js").default;

describe("Tutorial Saucectl Cypress Test", function () {
  describe("5.1", function () {
    it("Test SwagPagePath exists", async () => {
      try {
        const file = await fsPromises.readFile(SwagPagePath, "utf-8");
        expect(file).to.be.ok;
      } catch (error) {
        throw ("Errors", error);
      }
    });

    describe("Test SwagPage class has screen function", () => {
      it("has login button container", () => {
        try {
          SwagPage.screen;
          const inventoryList = spy.calledWith(
            ".inventory_list"
          );
          expect(inventoryList).to.be.ok;
        } catch (error) {
          throw ("Errors", error);
        }
      });
    });
  });
});
