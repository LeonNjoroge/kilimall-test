const {I} = inject();


import dotenv from 'dotenv';
dotenv.config();

const emailENV = process.env.EMAIL;
const passwordENV = process.env.PASSWORD;

module.exports = {
    login() {
      I.amOnPage('/login');
      I.fillField('account', emailENV);
      I.fillField('password', passwordENV);
      I.click('button.van-button');
      I.wait(2);
      I.amOnPage('/');
      I.see(emailENV, locate('span.label').at(2));  
    },
}