import {test as base} from "@playwright/test";
import {PageManger}  from './tests/pageObgects/pageManager'

export type TestOptions = {

   envURL: string,
   pageManger:PageManger,
   gotoURL:string
}

export const test = base.extend<TestOptions>({
envURL:['', {option:true}],

pageManger: async({page},use)=>{ // This is a function and it can be called a a 'fixture'that will be called before each test, it will create an instance of the PageManger class and pass the page object to it, then it will use the use function to pass the instance of the PageManger class to the test
    const pageManger=new PageManger(page)
    await use(pageManger)
},
gotoURL: async({page,envURL},use)=>{
    await page.goto(envURL)
    await use(envURL)
}
}
)