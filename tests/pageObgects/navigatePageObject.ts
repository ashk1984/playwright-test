
import { Page,expect } from "@playwright/test"; 
import { Helper } from "./pageHelper";

export class NavigatePage  extends Helper{

constructor(page:Page){
    super(page)          
}
 
async selectFormLayoutpage(menuItem:string, menuItemName:string){
    // await this.page.getByText('Forms').click()
    await expect(this.page.getByTitle(menuItem)).toBeVisible()
    await this.checkGroupMenuIsExpended(menuItem)
    await expect(this.page.getByTitle(menuItemName)).toBeVisible()
    await this.page.getByTitle(menuItemName).click()
  

}
 private async checkGroupMenuIsExpended(menuItem:string){
 const menuItemLocator= await this.page.getByTitle(menuItem)
 const menuItemState= await menuItemLocator.getAttribute('aria-expanded')
 if (menuItemState=='false'){
  await this.page.getByText(menuItem).click()

   }

}
} 
   