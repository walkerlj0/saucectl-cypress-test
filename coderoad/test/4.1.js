const expect = require("chai").expect;
const fsPromises = require("fs").promises;
const sinon = require("sinon");

const LoginPagePath = "../cypress/pageobjects/LoginPage.js";
const LoginPage = require("../../cypress/pageobjects/LoginPage").default;

global.cy = { get: () => ({
  type: () => {},
  click: () => {},
})};

global.spy = sinon.spy(global.cy, "get");

describe("Tutorial Saucectl Cypress Test", function () {
  describe("4.1", function () {
    it("Test LoginPage exists", async () => {
      try {
        const file = await fsPromises.readFile(LoginPagePath, "utf-8");
        expect(file).to.be.ok;
      } catch (error) {
        throw ("Errors", error);
      }
    });

    describe("Test LoginPage class has these functions", () => {
      it("has login button container", () => {
        try {
          LoginPage.screen;
          const loginButtonContainer = spy.calledWith(
            "#login_button_container"
          );
          expect(loginButtonContainer).to.be.ok;
        } catch (error) {
          throw ("Errors", error);
        }
      });

      it("has login username", () => {
        try {
          LoginPage.username;
          const loginUsername = spy.calledWith("#user-name");
          expect(loginUsername).to.be.ok;
        } catch (error) {
          throw ("Errors", error);
        }
      });

      it("has login password", () => {
        try {
          LoginPage.password;
          const loginPassword = spy.calledWith("#password");
          expect(loginPassword).to.be.ok;
        } catch (error) {
          throw ("Errors", error);
        }
      });

      it("has login action button", () => {
        try {
          LoginPage.loginButton;
          const btnAction = spy.calledWith(".btn_action");
          expect(btnAction).to.be.ok;
        } catch (error) {
          throw ("Errors", error);
        }
      });

      it("has login button container", () => {
        try {
          LoginPage.errorMessage;
          const errorMessage = spy.calledWith('[data-test="error"]');
          expect(errorMessage).to.be.ok;
        } catch (error) {
          throw ("Errors", error);
        }
      });

      it("signIn function works", () => {
        try {
          const fakeUser = {
            username: null,
            password: null,
          };
          // const LoginButtonStub = sinon.stub(LoginPage.loginButton, 'loginButton');
          // console.log(LoginButtonStub);
          LoginPage.signIn(fakeUser);
    
          const btnAction = spy.calledWith(".btn_action");
          expect(btnAction).to.be.ok;

        } catch (error) {
          throw ("Errors", error);
        }
      });
    });
  });
});
