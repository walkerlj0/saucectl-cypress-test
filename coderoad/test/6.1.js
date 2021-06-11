const expect = require("chai").expect;
const fsPromises = require("fs").promises;
const yaml = require('js-yaml');

const artifactsFolderPath = '../artifacts';
const sauceConfigPath = '../.sauce/config.yml';

describe("Tutorial Saucectl Cypress Test", async () => {
  describe("6.1", function () {
    it("Test saucectl run command has been ran", async () => {
      try {
        const result = await fsPromises.stat(artifactsFolderPath);
        expect(result.isDirectory()).to.be.true;
      } catch (error) {
        throw ("Errors", error);
      }
    });

    describe("Test .sauce/config.yml suites with proper value", () => {
        it("Test config.yml suites'length is greater than 1", async () => {
            const result = yaml.load(await fsPromises.readFile(sauceConfigPath, 'utf-8'));
            const suites = result['suites'];
            expect(suites).length.greaterThan(1);
        });
        it("Test config.yml suites[1] has sample value", async () => {
            const result = yaml.load(await fsPromises.readFile(sauceConfigPath, 'utf-8'));
            const suites = result['suites'];
            expect(suites[1]['name']).to.be.ok;
            expect(suites[1]['browser']).to.be.ok;
            expect(suites[1]['platformName']).to.be.ok;
            expect(suites[1]['config']).to.be.ok;
            expect(suites[1]['config']['testFiles']).length.greaterThan(0);
        });
    });
  });
});
