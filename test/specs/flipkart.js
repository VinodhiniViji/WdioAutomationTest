import flipkartP from '../Page/flipkartP.page';
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
       
    });
   
});


