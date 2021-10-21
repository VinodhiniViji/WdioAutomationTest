import flipkartP from '../Page/flipkartP.page';
import {expect as chaiExpect} from 'chai';
describe('flipkart add item', () => {
    before(() => {
        flipkartP.open();

    });
    it('should add item in cart', async() => {
         await flipkartP.closeIcon.click(); 
        await flipkartP.GroceryBtn.click();
        await flipkartP.pinCodeBtn.click();
        await flipkartP.staplesClk.moveTo();
        await flipkartP.DalsClk.moveTo();
        await flipkartP.DalsClk.waitForClickable({timeot:2000}); 
        await flipkartP.allClk.waitForClickable({timeot:2000});
        await flipkartP.allClk.click();
        await flipkartP.product1.click();
        await flipkartP.product2.click();
        await flipkartP.addCartClk.click();
        await flipkartP.clickView.click(); 
        browser.pause(1000);
        const productname = await $("//div//a[text()='My Kitchen Urad Dal (Whole)']");
        await productname.waitForDisplayed({timeout:5000});
        const value =  await productname.getText();
        browser.pause(1000);
        console.log(value);
        chaiExpect(value).to.equal("My Kitchen Urad Dal (Whole)");
        const productname1 = await $("//div//a[text()='Yellow Moong Dal (Split)']");
        await productname1.waitForDisplayed({timeout:5000});
        const value1 =  await productname1.getText();
        browser.pause(1000);
        console.log(value1);
        chaiExpect(value1).to.equal("Yellow Moong Dal (Split)");
             
    });
   
});


