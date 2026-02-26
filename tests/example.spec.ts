import {test,expect} from '@playwright/test';

test('Check locators',async({page})=>{

//By Tag

await page.locator('input')

//By Id
page.locator('#inputEmail1')

//By class name
page.locator('.input-full-width')

//By attribute

page.locator('[placeholder="Email"]')

//By specific text in the name
page.locator(':text("using")')

//By exact text
page.locator(':test-is("using")')

//by child elemets

})


test('test by by child elemets',async({page})=>{
await page.goto('http://localhost:4200/pages/iot-dashboard')
await page.getByTitle('Forms').click()
await page.locator('[title="Form Layouts"]').click()
// await page.getByText('Forms layout').click()
await page.locator('nb-card',{hasText:'Using the Grid'}).click()
await page.locator('nb-card',{hasText:'Using the Grid'}).getByPlaceholder('Email').fill('test@email.com')

})

test('Test reuse locators',async({page})=>{
const clickDropDown= await page.getByTitle('Projects').locator('../..')
         await clickDropDown.locator('div[class*=barStack]').first().click()

})

test('Test extract value',({page})=>{
    const button = page.getByRole('button').textContent
    expect(button).toEqual('Submit')

    //All text content
    const workspaceValues = page.locator('span.ms-Dropdown-optionText').allTextContents()
      const expectedWorkspaceValues = ['Appointed to me', 'Assigned to my teams', 'All tasks']
    expect.soft(workspaceValues.sort()).toEqual(expectedWorkspaceValues.sort())

    //Input value

    const Emailfield = page.getByRole('textbox', {name:'Email'})
    Emailfield.fill('TestEmail')
    const InputValue = Emailfield.inputValue()
    expect(InputValue).toEqual('Test')

    //Get Attribute

    const placeholder = Emailfield.getAttribute('placeholder')
    expect(placeholder).toEqual('Email')
})

test('test assertion', async({page})=>{

  //General
  const value=5
  expect(value).toEqual(5)

  //Locator assertion
  const Emailfield = page.getByRole('textbox', {name:'Email'})
  await expect(Emailfield).toHaveScreenshot('Email')

  //Soft assertion
  const Emailfield2 = page.getByRole('textbox', {name:'Email'})
  await expect.soft(Emailfield).toHaveScreenshot('Test')
  await Emailfield2.click()
})

test('check auto waiting',async({page})=>{
await page.goto('https://uitestingplayground.com/ajax')
await page.getByText('Button Triggering AJAX Request').click()
const successButton=page.locator('.bg-success')
await expect(successButton).toHaveText('Data loaded with AJAX get request.',{timeout:20000})

})
// https://playwright.dev/docs/actionability
test('check alternative waiting',async({page})=>{
await page.goto('https://uitestingplayground.com/ajax')
await page.getByText('Button Triggering AJAX Request').click()

// Wait for selector
await page.waitForSelector('.bg-success',{timeout:20000})
const successButton=page.locator('.bg-success')
const text=successButton.allTextContents()
expect(text).toContain('Data loaded with AJAX get request.')


//Wat for response
await page.waitForResponse('https://uitestingplayground.com/ajaxdata')

//Wait for network - all requests
await page.waitForLoadState('networkidle')


})