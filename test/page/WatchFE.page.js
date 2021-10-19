import Page from './Page'
class WatchFE extends Page
{
    open()
    {
super.open("https://www.amazon.in/ref=c");
    }
get categorieslist()
{
    return $("#nav-hamburger-menu");
  
    }
    get womensfashion()
    {
return $$('//*[@id="hmenu-content"]/ul[1]/li/div');
    }
    get wtchs()
    {
return $('//*[@id="hmenu-content"]/ul[11]/li[10]/a');
    }
    get clksearchbox()
    {
return $('//*[@id="twotabsearchtextbox"]');
    }
    getwomensfashionListText()
     {
        return this.womensfashion.map(async (element) =>
          console.log(await element.getText())
          );
     }

}
export default new WatchFE();
