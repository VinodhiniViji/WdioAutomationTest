import ebayPO from '../Page/ebayPO.page';
import {expect as chaiExpect} from 'chai';

describe('To validate the element', () => {
    before(() => {
        ebayPO.open();
    });
    
    after(()=>{
        console.log('test case complet');
    });
   
        it('should Launch ecommerce site', async () => {
        expect(browser).toHaveUrl("https://www.ebay.com/");

        //'should set value for a certain element'
        await ebayPO.txtSearchBox.waitForClickable({timeout:1000});
        await ebayPO.txtSearchBox.setValue('Watches');   

        //should click the search btn
         await ebayPO.searchbtn.click();
        
        //should verify the title
        expect(browser).toHaveTitle('watches | eBay');

        //should click on any product
        await ebayPO.clickproduct.click(); 
        await browser.pause(3000);
        let tabs = await browser.getWindowHandles();
        console.log(tabs);
        await browser.switchToWindow(tabs[1]);

         //should get and print the value
         ebayPO.lblDesc.waitForDisplayed({timeout:5000});
        const value =  await ebayPO.lblDesc.getText();
        browser.pause(1000);
        console.log(value);          
        });
  
    
    });


