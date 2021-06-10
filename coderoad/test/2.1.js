const expect = require('chai').expect;
const fsPromises = require('fs').promises;
const cypressJson = '../cypress.json';

describe('Tutorial Saucectl Cypress Test', function() {
  describe('2.1', function() {
    it('Test cypress.json exists', async () => {
      // expect(cypressJson);
      try {
        const file = await fsPromises.readFile(cypressJson);
        expect(JSON.parse(file)).to.be.ok;
      } catch (error) {
        throw('Errors', error);
      }
    });

    it('The cypress.json baseUrl set is correct', async () => {
      // expect(cypressJson);
      try {
        const file = await fsPromises.readFile(cypressJson);
        const obj = JSON.parse(file);
        expect(obj['baseUrl']).eq('https://www.saucedemo.com/v1/');
      } catch (error) {
        throw('Errors', error);
      }
    });
  });
});