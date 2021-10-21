import SearchLap from '../page/SearchLap.page';

describe('Flipkart Laptop product search', () => {
    before(() => {
        SearchLap.open();

    })

    it('should open the mail url and verify the title', async () => {
        await SearchLap.closeIcon.click();
        await SearchLap.electPro.click();
        await SearchLap.moveLap.moveTo();
        //await SearchLap.lapPro.moveTo();        
        await SearchLap.lapPro.click();  
        await SearchLap.lapBrand.click();
        await SearchLap.brandHp.click();
        //expect(browser).toHaveTitle('Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!');
    browser.pause(5000);

    });  
    
});