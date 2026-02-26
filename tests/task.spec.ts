
import {test} from '@playwright/test'

test('Count the number of chars',()=>{

function countTheNumberOfChars(symbol:string){
const text='Interaction with business stakeholders and end users, functional testing of team deliverables manual testing of desktop application (trading platform) manual testing of mobile application (web version) automation testing as a plus (Cucumber, Selenium, etc)creation test cases in'
let count=0
for ( const char of text){
        if (char===symbol){
        count++
    }
    }
     // console.log('The naumber of'+char+'is'+count)
    return count
    

} 
const resultCount=countTheNumberOfChars('o')
console.log('Number of chars is'+ ' '+resultCount)

}
)


test('Find lucky ticket',()=>{
// //     Create a function that accepts an array of ticket numbers and returns only the lucky tickets.
// // A ticket is considered lucky if:
// // It is a 6-digit number, and
// // The sum of the first three digits equals the sum of the last three digits.

function checkIfNumberIsLucky (tickets:string[]):string[]{
return tickets.filter(luckyTicket =>{
    
    if (luckyTicket.length!==6){
        console.log('wrong number')
        return false
    }
    const firstSum= Number(luckyTicket[0])+Number(luckyTicket[1])+Number(luckyTicket[2])
    const secondSum= Number(luckyTicket[3])+Number(luckyTicket[4])+Number(luckyTicket[5])
    return firstSum===secondSum
}
)
}

const result = checkIfNumberIsLucky(['00112255','123321','4444447'])

console.log(result)

})

test('', ()=>{

 // for i loop

 for (let i=1;i>=5;i++)
 {console.log('*'.toString().repeat(i))}


})
