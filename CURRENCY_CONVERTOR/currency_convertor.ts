#!/usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

console.log("\n\t"+chalk.bgCyanBright.bold.italic("WELCOME IN CURRENCY CONVERTOR APP"+"\n\t"));




let exchang_rate : any = {
USD:1,          //Base Currency (United state)
EURO: 0.94,     //European Currency
CAD : 1.38,     //Canadian Dollar
AUD : 1.54,     //Australian Dolar 
PKR : 277.95,    //Pakistani Rupes
IND : 83.61 ,      //Indian Rupes
IRAN: 42075 ,    //Iranian Rial
SUD : 586 ,     //Saudi Riyal
UAE : 3.67,     //United Arab Emirates
}


let Currency :any =await inquirer.prompt([{
    name : 'from_currency',
    type :  'list',
    message : "please select  the currency convert from :",
    choices : ["USD", "EURO" , "CAD", "AUD" , "PKR" , "IND", "IRAN","SUD","UAE"]
}, 
{ 

name : 'to_currency',
type :  'list',
message : "please select  the currency convert into ",
choices : ["USD", "EURO" , "CAD", "AUD" , "PKR" , "IND", "IRAN","SUD","UAE"]
} ,
{

 name : "amount",
type  : "number",
message : "Enter the  amount to convert :"

}

])

//curency formula
//firstly store user  all output in a variable
//1st formula (simple formola)
 
console.log(chalk.bgGreenBright('\n\t'+exchang_rate[Currency.to_currency]/ 
                                exchang_rate[Currency.from_currency]* Currency.amount));

//2nd formula (dificult formola)

//let fromamount= exchang_rate[Currency.from_currency]
//let toamount= exchang_rate[Currency.to_currency]
//let amount =Currency.amount
//let baseAmount=amount/fromamount //base me convert hoga phly
//let convertoramount= baseAmount * toamount
//console.log(convertoramount);
