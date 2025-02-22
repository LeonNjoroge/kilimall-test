//Adding product to cart

const {I} = inject();

import { randomInt } from 'crypto';
const common = require('./common.steps');




//Adding product to cart when user is not logged in

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
When('I login to account',() => {
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
When('I click the add to cart button', ()=> {
    I.waitForElement('.sku-wrapper');
    I.click(locate('.van-button').at(1));
});
Then('I get the added to cart message', () => {
    I.waitForElement('.van-popup');
});