import {test} from '../test.options.ts';
import {PageManger} from '../tests/pageObgects/pageManager.ts'

// test.beforeEach(async({page})=>{
// // await page.goto('http://localhost:4200')

// })

test('check Navigate to different menu',async({pageManger,gotoURL})=>{
await pageManger.navigateTo().selectFormLayoutpage('Forms','Form Layout')
await pageManger.navigateTo().selectFormLayoutpage('Modal & Overlays','Toastr')
})

test('Select date with range',async({gotoURL,pageManger,page})=>{
await page.getByText('Forms').click()
await page.getByText('Datepicker').click()
await pageManger.datePicker().selectDatewithRange(1,5)

})
test('Select date in calendar',async({gotoURL,pageManger,page})=>{
await page.getByText('Forms').click()
await page.getByText('Datepicker').click()
await pageManger.datePicker().selectDateFromCurrentDate(10)

})

// test.describe('test suite for Ui components', ()=>{
// test.beforeEach(async({page})=>{
//   const navigateTo= new navigatePage(page)
//   await navigateTo.selectFormLayoutpage('Forms','Forms Layout')
//   // await page.getByText('Forms').click()
//   // await page.getByText('Form layout').click()
// })

// test('UI component',async({page})=>{

//   const inputField= page.locator('nb-card',{hasText: 'Using the Grid'}).getByRole('textbox',{name:"Email"})

// await inputField.fill('iuweyqweyuiqweyiu')

// await inputField.clear()
// await inputField.pressSequentially('test for input',{delay:100})

// //generic assertion
// const inputValue = await inputField.inputValue()
// expect(inputValue).toEqual('test for input')

// //locator assertion
//  await expect(inputField).toHaveValue('test for input')

// })

// test('check radio button',async({page})=>{
//   // const radioButton= page.locator('nb-card',{hasText: 'Using the Grid'}).getByLabel('Option 1')
//   const radioButton= page.locator('nb-card',{hasText: 'Using the Grid'}).getByRole('radio', {name:'Option 1'})  
//   await radioButton.check({force:true})
//   const radioButtonState=await page.locator('nb-card',{hasText: 'Using the Grid'}).getByRole('radio', {name:'Option 1'}).isChecked()
//   expect(radioButtonState).toBeTruthy


// })

// test('check drop down button',async({page})=>{
//   const dropDownButton= page.locator('ngx-header nb-select')  
//   // await dropDownButton.click({force:true})
  
//   //option when has UL tag
//   page.getByRole('list')
//   //option when has LI  tag
//    page.getByRole('listitem')

//   //  const option = page.locator('nb-option-list nb-option')
//    const option= page.getByRole('list').locator('nb-option')
//   //  await option.filter({hasText:'Cosmic'}).click()

//    const colours:{[key:string]:string}={
//     "Light":"rgb(255, 255, 255)",
//     "Dark":"rgb(34, 43, 69)",
//     "Cosmic":"rgb(50, 50, 89)",
//     "Corporate":"rgb(255, 255, 255)"
//    }

//    await dropDownButton.click()
//    for(const colour in colours){
//      await page.getByRole('list').locator('nb-option').filter({hasText:colour}).click()
//      console.log(colour)
//      await expect(page.locator('nb-layout-header')).toHaveCSS('background-color', colours[colour])
//      if (colour!='Corporate'){
//       await dropDownButton.click()
//      }

//     }

// })


// })

// test('test suite for checkbox', async({page})=>{
//   await page.getByText('Modal & Overlays').click()
//   await page.getByText('Toastr').click()
//   await page.getByRole('checkbox',{name:'Hide on click'}).check({force:true})
//   await page.getByRole('checkbox',{name:'Hide on click'}).uncheck({force:true})

//   // check all checkboxes
//   const allCheckBoxes = await page.getByRole('checkbox')
//   for (const checkbox of await allCheckBoxes.all()){
//         await checkbox.uncheck({force:true})
//         await expect(checkbox.isChecked).toBeTruthy()
//   }

//     //Uncheck all checkboxes
//   // const allCheckBoxes = await page.getByRole('checkbox')
//   // for (const checkbox of await allCheckBoxes.all()){
//   //       await checkbox.check({force:true})
//   //      await expect(checkbox.isChecked).toBeFalsy()
//   // }
// })

// test('check windows dialog button',async({page})=>{
  
//   await page.getByText('Tables & Data').click()
//   await page.getByText('Smart Table').click()
//   // await page.getByRole('table').locator('tr',{hasText:"mdo@gmail.com"}).locator('.nb-trash').click()
//   const trashButton= page.getByRole('table').locator('tr',{hasText:"mdo@gmail.com"}).locator('.nb-trash')
//    await trashButton.click()
//   page.on('dialog',dialog=>{
//     expect(dialog.message()).toEqual('Are you sure you want to delete?')
//     dialog.accept()
//   })
//   await trashButton.click()

// })

// test('check table',async({page})=>{
  
//   await page.getByText('Tables & Data').click()
//   await page.getByText('Smart Table').click()
//   const row= page.getByRole('row').filter({hasText:'mdo@gmail.com'})
//   await row.locator('.nb-edit').click()
//   // await page.locator('input-editor').getByPlaceholder('age').click()
//   // await page.locator('input-editor').getByPlaceholder('age').fill('42')

//   // Test search
//   const ages = ['20','30','40','200']
//   for (let age of ages){
//    await page.locator('input-filter').getByPlaceholder('age').click()
//    await page.locator('input-filter').getByPlaceholder('age').fill(age)
//    await page.waitForTimeout(1000)
//      const rowAge=await page.locator('tbody tr')

//   for(let row of await rowAge.all()){
//     const cellValue= await row.locator('td').last().textContent()
//     console.log(cellValue)
//     if(age=='200'){
//       expect(await page.getByRole('table').textContent()).toContain('No data found')

//     }else {
//       expect (cellValue).toEqual(age)
//   }
//     }
   
//    }
//   })

//   test('test datepickers',async({page})=>{
// await page.getByText('Forms').click()
// await page.getByText('Datepicker').click()
// const datePicker = page.getByPlaceholder('Form Picker')
// await datePicker.click()
// // await page.locator('[class="day-cell ng-star-inserted"]').getByText('14',{exact:true}).click()

// let date = new Date()
// date.setDate(date.getDate()+7)
// const expectedDate=date.getDate().toString() //Will return the day e.g '21'
// const expectedMonth=date.toLocaleString('En-Us',{month:'short'})
// const expectedMonthLong=date.toLocaleString('En-Us',{month:'long'})
// const expectedYear= date.getFullYear()
// const dateToAssert= `${expectedMonth} ${expectedDate}, ${expectedYear}`

// //Extract the current date from the calendar
// let calendarMonthAndYear=await page.locator('nb-calendar-view-mode').textContent()
// console.log(calendarMonthAndYear)
// //Define expected month and year
// const expectedMonthAndYear=` ${expectedMonthLong} ${expectedYear}`
// console.log(expectedMonthAndYear)
// //Add a while loop to check the current year
// while(!calendarMonthAndYear?.includes(expectedMonthAndYear)){
//   await page.locator('nb-calendar-pageable-navigation [data-name="chevron-right"]').click()
//   calendarMonthAndYear=await page.locator('nb-calendar-view-mode').textContent()
// }
// await page.locator('[class="day-cell ng-star-inserted"]').getByText((expectedDate),{exact:true}).click()
// await expect(datePicker).toHaveValue(dateToAssert)
//   })