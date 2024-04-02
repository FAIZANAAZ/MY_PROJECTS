#!/usr/bin/env node
import inquirer from "inquirer";
const randamNumber = Math.floor(Math.random() * 6 + 1);
console.log("welcome to number Guessing Game");
const answer = await inquirer.prompt([{
        name: "userGuessedNumber",
        type: "number",
        message: " please guess a number between 1-6",
    }
]);
if (answer.userGuessedNumber === randamNumber) {
    console.log("congratulation ! you guessed  right number ");
}
else {
    console.log("you guessed a wrong number ");
}
;
