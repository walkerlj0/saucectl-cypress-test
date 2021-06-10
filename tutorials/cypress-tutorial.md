# What You'll Learn

This is an introduction to your tutorial. It will show up on the first page when your tutorial is started.

## 1. Cypress Project Introduction

> This tutorial walks you through creating a very simple test against the 'Swag Labs' app at https://saucedemo.com

This course is created for the purpose of helping users understand the project structure for a Cypress test, and using this to run a test on the Sauce Labs platform using the saucectl tool. It is not intended to demonstarte best practices for writing Cypress tests. More instructions about how to write Cypress tests can be found at cypress.io. 


### 1.1 Test Directroies

Take a look at the project structure on the right. Open the `/cypress` directory inside you will notice:

* `/pagebojects` – This directory contains code that will help you interact with the login and shopping page on saucedemo.com

* `/integration` – This is a default directory that is used for Cypress tests. You will create a login test here with some checks to make sure the login functionality on saucedemo.com is working. 

* `support` –  This file is created with your Cypress test by default.This is the directory where actions that occur before test files runs are kept. In this example we will be using it to store Sauce Labs credentials.

* `plugins` – This file is created with your Cypress test by default, and is used if you want to manage the Node process to modify your Cypress environment.


### 1.2 Cypress.json
If you look in your project file, you should also notice a `cypress.json` file alongside the `/cypress` directroy. This is a configuration file for your cypress test code project.

This file is used to set [all kinds of options for your Cypress test](https://docs.cypress.io/guides/references/configuration.html).

We will set the baseUrl, which is the url of the web app you are testing against.

### 1.03 The Integration Directory
Open up the `integration` directory. This is the place where the atual tests against an application are stored in a Cypress test project.

It's important to keep the tests in this directory as you will need tests to be here when you use saucectl to run tests on Sauce Labs later on.

Notice there is just one test object in this directory, called `login.spec.js`. This will contain the code that runs the `it()` statements that will test the functionality of the [login flow](https://www.saucedemo.com/).

### 1.04 The Pageobjects Directory
opn up the pageobjects


## 2.1 Create Page Objects

> Optional summary for Level 1

Here's where you can put a description, examples, and instructions for the lesson.

### 2.1 Level 2 Step 1

This is the test text. Create an `index.html` file to pass this lesson.

#### HINTS

- This is a hint to help people through the test
- Second hint for 1.1, don't worry if the hints don't show up yet

## 3. Create Cypress Tests

> Optional summary for Level 1

Here's where you can put a description, examples, and instructions for the lesson.

### 3.1 Level 3 Step 1

This is the test text. Create an `index.html` file to pass this lesson.

#### HINTS

- This is a hint to help people through the test
- Second hint for 1.1, don't worry if the hints don't show up yet

## 4. Introduction to saucectl & the Sauce Labs Platform

> Optional summary for Level 1

Here's where you can put a description, examples, and instructions for the lesson.

### 4.1 Level 4 Step 1

This is the test text. Create an `index.html` file to pass this lesson.

#### HINTS

- This is a hint to help people through the test
- Second hint for 1.1, don't worry if the hints don't show up yet

## 5. Set Up saucectl

> Optional summary for Level 1

Here's where you can put a description, examples, and instructions for the lesson.

### 5.1 Level 1 Step 1

This is the test text. Create an `index.html` file to pass this lesson.

#### HINTS

- This is a hint to help people through the test
- Second hint for 1.1, don't worry if the hints don't show up yet

## 6. Run Cypress Test on Sauce Labs

> Optional summary for Level 1

Here's where you can put a description, examples, and instructions for the lesson.

### 6.1 Level 1 Step 1

This is the test text. Create an `index.html` file to pass this lesson.

#### HINTS

- This is a hint to help people through the test
- Second hint for 1.1, don't worry if the hints don't show up yet
