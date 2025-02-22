//Adding product to cart

const {I} = inject();
import dotenv from 'dotenv';
dotenv.config();
import { randomInt } from 'crypto';


//Set up environment variables
const emailENV = process.env.EMAIL;
const passwordENV = process.env.PASSWORD;

//Adding product to cart when user is not logged in

Given('I am on the home page', () => {
    I.amOnPage('/');
});
When('I click an option on the category', () => {
    I.click(locate('div.base-category-item').at(randomInt(12 - 2)));

} );
Then('I am on category page', () => {
    I.see('results for');
    
});
When('I select a product', () => {
    I.click(locate('div.product-item a').at(randomInt(20 - 1)));
    I.switchToNextTab();
});
When('I click the add to cart button', ()=> {
    I.waitForElement('.sku-wrapper');
    I.click(locate('.van-button').at(1));
});
Then('I am redirected to login page', () => {
    I.amOnPage('/login');
});


//Adding product to cart when user is loged in
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
Given('I am on the home page', () => {
    I.amOnPage('/');
});
When('I click an option on the category', () => {
    I.click(locate('div.base-category-item').at(randomInt(12 - 2)));

} );
Then('I am on category page', () => {
    I.see('results for');
   
});
When('I select a product', () => {
    I.click(locate('div.product-item a').at(randomInt(20 - 1)));
    I.switchToNextTab();
});
When('I click the add to cart button', ()=> {
    I.waitForElement('.sku-wrapper');
    I.click(locate('.van-button').at(1));
});
Then('I get the added to cart message', () => {
    I.waitForElement('.van-popup');
});