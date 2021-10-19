import WatchFE from '../Page/WatchFE.page';

describe('Watches Page', () =>{
    before( async() => {
        //browser.url('https://www.amazon.in/ref=c');
        await WatchFE.open(); 
        
    });
    
     it('should get the list', async() =>{
         
        //click categorieslist
        await browser.pause(3000);
        await WatchFE.categorieslist.waitForExist({timeout:5000});
        await WatchFE.categorieslist.click();
        await browser.pause(1000);
        //getting fashion list
        await WatchFE.getwomensfashionListText();
      
        //shold click watch
        await WatchFE.wtchs.click();
       
        //const clksearchbox = await $('//*[@id="twotabsearchtextbox"]');
        await WatchFE.clksearchbox.setValue('smartWatches');
    });
});