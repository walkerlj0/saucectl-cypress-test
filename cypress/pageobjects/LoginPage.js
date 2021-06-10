// filename: cypress/pageobjects/LoginPage.js
class LoginPage {
<<<<<<< HEAD
   get screen() {
       return cy.get('#login_button_container');
   }

   get username() {
       return cy.get('#user-name');
   }

   get password() {
       return cy.get('#password');
   }

   get loginButton() {
       return cy.get('.btn_action');
   }

   get errorMessage() {
       return cy.get('[data-test="error"]');
   }

   signIn(userDetails) {
    const {password, username} = userDetails;

    if (username) {
        this.username.type(username);
    }
    if (password) {
        this.password.type(password);
    }

    this.loginButton.click();
  }
=======
>>>>>>> a1e4c9c9c2677d7019571dabeee2a8e43c8c9205
}

export default new LoginPage();
