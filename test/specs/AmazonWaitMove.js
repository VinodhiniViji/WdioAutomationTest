import AmazonWM from '../Page/AmazonWM.page';
describe('prime link to wait and move', () => {
    before(() => {
        AmazonWM.open();
    });
it('should wait and move to the next page', async () => {
   await AmazonWM.primelink.moveTo();
    //await AmazonWM.primelink.click();
    await AmazonWM.joinlink.click();
    
});
});