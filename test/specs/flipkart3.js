import SearchLap from '../page/SearchLap.page';

describe('Flipkart Laptop product search', () => {
    before(() => {
        SearchLap.open();

    })

    it('should open the mail url and verify the title', async () => {
        await SearchLap.closeIcon.click();
        await SearchLap.electPro.click();
        await SearchLap.moveLap.moveTo();      
        await SearchLap.lapPro.click();  
        await SearchLap.lapBrand.click();
        await SearchLap.brandHp.click();
    browser.pause(5000);
        let totalCount = await SearchLap.productCount.getText();
        console.log(totalCount);

    });  
    
});