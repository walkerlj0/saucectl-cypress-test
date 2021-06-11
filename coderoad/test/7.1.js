const expect = require("chai").expect;
const fsPromises = require("fs").promises;
const yaml = require('js-yaml');

const saucectlPath = '/usr/local/bin/saucectl';
const sauceConfigPath = '../.sauce/config.yml';

describe("Tutorial Saucectl Cypress Test", async () => {
  describe("7.1", function () {
    it("Test saucectl cli exists", async () => {
      try {
        const result = await fsPromises.stat(saucectlPath);
        expect(result).to.be.ok;
      } catch (error) {
        throw ("Errors", error);
      }
    });

    it("Test saucectl configure runs: (username & accessKey) exist", async () => {
        const ymlFile = `${process.env.HOME}/.sauce/credentials.yml`;
        const result = yaml.load(await fsPromises.readFile(ymlFile, 'utf-8'));
        expect(result['username']).to.be.ok;
        expect(result['accessKey']).to.be.ok;
    });

    describe("Test .sauce/config.yml suites with proper value", () => {
        it("Test config.yml suites'length is greater than 0", async () => {
            const result = yaml.load(await fsPromises.readFile(sauceConfigPath, 'utf-8'));
            const suites = result['suites'];
            expect(suites).length.greaterThan(0);
        });
        it("Test config.yml suites[0] has sample value", async () => {
            const result = yaml.load(await fsPromises.readFile(sauceConfigPath, 'utf-8'));
            const suites = result['suites'];
            expect(suites[0]['name']).to.be.ok;
            expect(suites[0]['browser']).to.be.ok;
            expect(suites[0]['platformName']).to.be.ok;
            expect(suites[0]['screenResolution']).to.be.ok;
            expect(suites[0]['config']).to.be.ok;
            expect(suites[0]['config']['testFiles']).length.greaterThan(0);
        });
    });
  });
});
