import { Page,expect } from "@playwright/test"
import { Helper } from "./pageHelper";

export class DatePickerPage extends Helper{
    constructor(page:Page) {
        super(page)
    }

async selectDateFromCurrentDate(numberOfDays:number){

const datePicker = this.page.getByPlaceholder('Form Picker')
await datePicker.click()
const dateToAssert= await this.selectDateInCalendar(numberOfDays)
await expect(datePicker).toHaveValue(dateToAssert)

}

async selectDatewithRange(startDate:number,EndDate:number){

const datePicker = this.page.getByPlaceholder('Range Picker')
await datePicker.click()
const startDateToAssert= await this.selectDateInCalendar(startDate)
const endDateToAssert= await this.selectDateInCalendar(EndDate)
const dateToAssert= `${startDateToAssert} - ${endDateToAssert}`
await expect(datePicker).toHaveValue(dateToAssert)

}

private async selectDateInCalendar(numberOfDays:number){
    let date = new Date()
date.setDate(date.getDate()+numberOfDays)
const expectedDate=date.getDate().toString() //Will return the day e.g '21'
const expectedMonth=date.toLocaleString('En-Us',{month:'short'})
const expectedMonthLong=date.toLocaleString('En-Us',{month:'long'})
const expectedYear= date.getFullYear()
const dateToAssert= `${expectedMonth} ${expectedDate}, ${expectedYear}`

//Extract the current date from the calendar
let calendarMonthAndYear=await this.page.locator('nb-calendar-view-mode').textContent()
//Define expected month and year
const expectedMonthAndYear=` ${expectedMonthLong} ${expectedYear}`
//Add a while loop to check the current year
while(!calendarMonthAndYear?.includes(expectedMonthAndYear)){
  await this.page.locator('nb-calendar-pageable-navigation [data-name="chevron-right"]').click()
  calendarMonthAndYear=await this.page.locator('nb-calendar-view-mode').textContent()
}
await this.page.locator('[class="day-cell ng-star-inserted"]').getByText(expectedDate,{exact:true}).click()
return dateToAssert 
}
}