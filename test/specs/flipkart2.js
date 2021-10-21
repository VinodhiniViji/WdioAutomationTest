import flipkartP2 from '../Page/flipkartP2.page';
describe('display the selected item', () => {
    before(() => {
        flipkartP2.open();

    })
       
it('should add item in cart', async() => {
    await flipkartP2.closeIcon.click();
    await flipkartP2.FashionBtn.click();
    await flipkartP2.menClk.moveTo();
    await flipkartP2.tShirtClk.click();
    await flipkartP2.minValue.click();
    await flipkartP2.valueClk.click();
    
});
   
});



