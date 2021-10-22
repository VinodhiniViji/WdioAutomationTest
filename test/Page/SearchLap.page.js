import Page from './page';

class SearchLap extends Page {

        get closeIcon() {
            return $("//button[text()='✕']");
        }
        get electPro() {
            return $("//div[text()='Electronics']");
        }
        get moveLap() {
            return $("//span[text()='Electronics']");
        }
        get lapPro() {
            return $("//a[text()='Gaming Laptops']");
        }
        /* get viewAll() {
            return $("//span[text()='VIEW ALL']");
        } */
        //const loginBtn = $("//span[text()='Login']/../..//button");

        get lapBrand() {
            return $("//div[text()='Brand']");
        }

        get brandHp() {
            return $("//div[text()='HP']");
        }
        get productCount()
        {
 return $("//h1[text()='Laptops']/following::span[1]");
        }

   open() {
       super.open('https://www.flipkart.com/');
   }
}

export default new SearchLap();