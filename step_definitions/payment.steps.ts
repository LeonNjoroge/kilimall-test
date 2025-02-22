//Buying product now

const {I} = inject();
import dotenv from 'dotenv';
dotenv.config();
import { randomInt } from 'crypto';


//Set up environment variables
const emailENV = process.env.EMAIL;
const passwordENV = process.env.PASSWORD;

//Buying product to cart when user is not logged in
Given('I am on the home page', () => {
    I.amOnPage('/');
});
When('I click an option on the category', () => {
    I.click(locate('div.base-category-item').at(randomInt(12 - 3)));

} );
Then('I am on category page', () => {
    I.see('results for');
});
When('I select a product', () => {
    I.click(locate('div.product-item a').at(randomInt(20 - 1)));
    I.switchToNextTab();
});
When('I click the Buy Now button', ()=> {
    I.waitForElement('.sku-wrapper');
    I.click(locate('.van-button').at(2));
});
Then('I am redirected to login page', () => {
    I.amOnPage('/login');
});


//Buying product now when user is logged in
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
    I.wait(2);
});
When('I should be redirected to the home page', () => {
    I.amOnPage('/');
});
When('I click an option on the category', () => {
    I.click(locate('div.base-category-item').at(randomInt(12 - 3)));
} );
Then('I am on category page', () => {
    I.see('results for');
});
When('I select a product', () => {
    I.click(locate('div.product-item a').at(randomInt(20 - 1)));
    I.switchToNextTab();
});
When('I click the Buy Now button', ()=> {
    I.waitForElement('.sku-wrapper');
    I.click(locate('.van-button').at(2));
});
Then('I get redirected to the checkout page', () => {
    I.amOnPage('/checkout');
});

