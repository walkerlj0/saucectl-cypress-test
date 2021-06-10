const expect = require('chai').expect;
const fsPromises = require('fs').promises;
const constantsJs = '../cypress/support/constants.js';

describe('Tutorial Saucectl Cypress Test', function() {
  describe('3.1', function() {
    it('Test constants.js exists', async () => {
      try {
        const file = await fsPromises.readFile(constantsJs, 'utf-8');
        expect(file).to.be.ok;
      } catch (error) {
        throw('Errors', error);
      }
    });
  });
});