import {Page}  from "@playwright/test";
import {NavigatePage}  from '../pageObgects/navigatePageObject'
import {DatePickerPage} from '../pageObgects/datePickerPageObject.ts'

export class PageManger{
private readonly page:Page
private readonly navigationPage:NavigatePage
private readonly datePickerPage:DatePickerPage

constructor(page:Page){
this.page=page
this.navigationPage=new NavigatePage(this.page)
this.datePickerPage=new DatePickerPage(this.page)
}

navigateTo(){
    return this.navigationPage
}

datePicker(){
    return this.datePickerPage
}

}


