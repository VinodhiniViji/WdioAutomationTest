describe('flipkart add item', () => {
    before(() => {
        browser.url('https://www.flipkart.com/');

    });
    it('should add item in cart', async() => {
        const closeIcon = await $("//button[text()='✕']");
        closeIcon.click();
        //clickGrocery
       const GroceryBtn = await $("//div[@class='eFQ30H'][9]");
       await GroceryBtn.waitForClickable({timeout:1000});
       GroceryBtn.click();
       //setvalue
       const pinCodeBtn = await $('//button[@class="_2KpZ6l _1IsWyb _3dESVI"]');
       await pinCodeBtn.click();
       //pinCodeBtn.setValue('631501');
       //pinCodeBtn.waitForClickable({timeot:1000});
       //await browser.keys('Enter'); 
       //wait and move
       const staplesClk = await $("//div[@class='_1psGvi SLyWEo']//div[text()='Staples']");
       await staplesClk.moveTo();
       const DalsClk = await $('//a[text()="Dals & Pulses"]');
        await DalsClk.moveTo();
        await DalsClk.waitForClickable({timeot:2000});
        const allClk = await $('//a[text()="All"]');
        await allClk.click();

    });
   
});


