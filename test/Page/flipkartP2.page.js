import Page from './Page'
class flipkartP2 extends Page
{
open()
{
super.open("https://www.flipkart.com/");
}
get closeIcon()
{
   return $("//button[text()='✕']");
}
get FashionBtn()
{
  return $("//div[@class='eFQ30H'][2]");
}
get menClk()
{
    return $('//div[@class="_331-kn"]//span[3]');
}
get tShirtClk()
{
    return $('//div//a[@title="T-Shirts"]');
}
get minValue()
{
    return $("//div[@class='_3uDYxP']//select");
}
get valueClk()
{
    return $("//div[@class='_3uDYxP']//option[3]");
}

}
export default new flipkartP2();