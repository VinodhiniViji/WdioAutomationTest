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
    await flipkartP2.productvlu.scrollIntoView();
        await flipkartP2.productvlu.waitForDisplayed({timeout:5000});
        const value1 =  await flipkartP2.productvlu.getText();
        browser.pause(1000);
        console.log(value1);
    
    //expect(value1).toBeGreaterThanOrEqual(1000);
    //expect(value1).toBeGreaterThan(0);
    //expect(value1).toBeLessThan(1000);
});
   
});



