import {test,expect} from "@playwright/test"


test.beforeEach(async({page})=>{
await page.goto('http://localhost:4200')

})

test('Check mobile input fields',async({page},testInfo)=>{
if (testInfo.project.name === 'mobile project with chrome browser'){ //testInfo parameter is used to add addtional condition for the test to run only for mobile project, because on desktop the sidebar is always visible and on mobile it is hidden and we need to click on the toggle button to open it
await page.locator('[class="sidebar-toggle"]').click()   
} 
await page.getByText('Forms').click()
await page.getByText('Form Layouts').click()
if (testInfo.project.name === 'mobile project with chrome browser'){
await page.locator('[class="sidebar-toggle"]').click()  
}
const inputField= page.locator('nb-card',{hasText: 'Using the Grid'}).getByRole('textbox',{name:"Email"})

await inputField.fill('iuweyqweyuiqweyiu')

await inputField.clear()
await inputField.pressSequentially('test for input',{delay:100})

//generic assertion
const inputValue = await inputField.inputValue()
expect(inputValue).toEqual('test for input')

//locator assertion
 await expect(inputField).toHaveValue('test for input')

})