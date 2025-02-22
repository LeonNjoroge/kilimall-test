//Buying product now

const {I} = inject();

import { randomInt } from 'crypto';

const common = require('./common.steps');


//Buying product to cart when user is not logged in
Given('I am on the home page', () => {
    I.amOnPage('/');
});
When('I click an option on the category', () => {
    I.click(locate('div.base-category-item').at(randomInt(2, 12)));

} );
Then('I am on category page', () => {
    I.see('results for');
});
When('I select a product', () => {
    I.click(locate('div.product-item a').at(randomInt(1, 20)));
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
When('I login to my account', () =>{
    common.login();
});
When('I click an option on the category', () => {
    I.click(locate('div.base-category-item').at(randomInt(2, 12)));
} );
Then('I am on category page', () => {
    I.see('results for');
});
When('I select a product', () => {
    I.click(locate('div.product-item a').at(randomInt(1, 20)));
    I.switchToNextTab();
});
When('I click the Buy Now button', ()=> {
    I.waitForElement('.sku-wrapper');
    I.click(locate('.van-button').at(2));
});
Then('I get redirected to the checkout page', () => {
    I.amOnPage('/checkout');
});

