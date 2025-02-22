//Login Tests



const {I} = inject();
import dotenv from 'dotenv';
dotenv.config();


//Set up environment variables
const emailENV = process.env.EMAIL;
const passwordENV = process.env.PASSWORD;

const wremailENV = `das${emailENV}`;
const wrpasswordENV = `das${passwordENV}`;

//Login with valid credentials

Given('I am on the home page', () => {
    I.amOnPage('/');
});
When('I click the My Account button',() => {
    I.click(locate('span.label').withText('My Account'));
});
Then('I am on the login page', () => {
    I.amOnPage('/login');
});
When('I enter the email: {string} and password: {string}', (email, password) => {
    I.fillField('account', email || emailENV);
    I.fillField('password', password || passwordENV);
});
When('I submit the login form',() => {
    I.click('button.van-button');
    I.wait(5);
});
When('I should be redirected to the home page', () => {
    I.amOnPage('/');
});
Then('I should see the email: {string} displayed at the top of the home page', (email) => {
    I.see(email || emailENV, locate('span.label').at(2));   
    
});


//Login with invalid credentials

Given('I am on the home page', () => {
    I.amOnPage('/');
});
When('I click the My Account button',() => {
    I.click(locate('span.label').withText('My Account'));
});
Then('I am on the login page', () => {
    I.amOnPage('/login');
});
When('I enter the wrong email: {string} and wrong password: {string}', (email, password) => {
    I.fillField('account', email || wremailENV);
    I.fillField('password', password || wrpasswordENV);
});
When('I submit the login form',() => {
    I.click('button.van-button');
    I.wait(2);
});
Then('I see Invalid username or password', () => {
    I.waitForElement('.van-popup');   
});
