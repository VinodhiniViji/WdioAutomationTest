import Page from './Page'
class flipkartP extends Page
{
open()
{
super.open("https://www.flipkart.com/");
}
get closeIcon()
{
    return $("//button[text()='✕']");
}
get GroceryBtn()
{
  return $("//div[@class='eFQ30H'][9]");
}
get pinCodeBtn()
{
  return $('//button[@class="_2KpZ6l _1IsWyb _3dESVI"]');
}
get staplesClk()
{
  return $("//div[@class='_1psGvi SLyWEo']//div[text()='Staples']");
}
get DalsClk()
{
  return $('//a[text()="Dals & Pulses"]');
}
get allClk()
{
  return $('//a[text()="All"]');
}
get product1()
{
  return $("//div[@data-id='PLSFT7N5S8TCXXH9']//following::button[2]");
}
get product2()
{
  return $("//div[@data-id='PLSFUUSEEY59CP44']//following::button[2]");
}
get addCartClk()
{
  return  $("//a[@class='_3SkBxJ']");
}
get clickView()
{
  return $("//div[@class='_3GAhHZ']//span[2]");
}
}
export default new flipkartP();