#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log("\n\t" + chalk.bgCyanBright.bold.italic("WELCOME IN CURRENCY CONVERTOR APP" + "\n\t"));
let exchang_rate = {
    USD: 1,
    EURO: 0.94,
    CAD: 1.38,
    AUD: 1.54,
    PKR: 277.95,
    IND: 83.61,
    IRAN: 42075,
    SUD: 586,
    UAE: 3.67, //United Arab Emirates
};
let Currency = await inquirer.prompt([{
        name: 'from_currency',
        type: 'list',
        message: "please select  the currency convert from :",
        choices: ["USD", "EURO", "CAD", "AUD", "PKR", "IND", "IRAN", "SUD", "UAE"]
    },
    {
        name: 'to_currency',
        type: 'list',
        message: "please select  the currency convert into ",
        choices: ["USD", "EURO", "CAD", "AUD", "PKR", "IND", "IRAN", "SUD", "UAE"]
    },
    {
        name: "amount",
        type: "number",
        message: "Enter the  amount to convert :"
    }
]);
//curency formula
//firstly store user  all output in a variable
//1st formula (simple formola)
console.log(chalk.bgGreenBright('\n\t' + exchang_rate[Currency.to_currency] /
    exchang_rate[Currency.from_currency] * Currency.amount));
//2nd formula (dificult formola)
//let fromamount= exchang_rate[Currency.from_currency]
//let toamount= exchang_rate[Currency.to_currency]
//let amount =Currency.amount
//let baseAmount=amount/fromamount //base me convert hoga phly
//let convertoramount= baseAmount * toamount
//console.log(convertoramount);
