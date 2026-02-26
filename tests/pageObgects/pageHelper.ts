import {Page} from  "@playwright/test";

export class Helper{

page:Page                 // we assign the passed parameter 'page' to this local field of this class and than we can use this instance of the page inside of the method below

constructor (page:Page){
                         //Construcot will wait for a parameter 'page that will be passed from the test using this page object to be sure that we are using the same instance of the page during test run'
    this.page=page
}

waitForNumberOfSeconds(seconds:number){

    this.page.waitForTimeout(seconds)

}

}