#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

console.log(chalk.bgYellow.bold.italic.underline("\n\t Hello ! (WELCOME IN FAIZA_NAAZ(WORDS COUNTER))\n\t"));


let quation =await inquirer.prompt([{

    type:"confirm",
    name: "yes$no",
    message:"You want to count your sentence length ",
    default:true
}])
if (quation.yes$no == true){

    console.log(chalk.bgBlue.bold("\n\t ok sure \n\t"));
    
    let user_ans = await inquirer.prompt(
    [
    {

    type:"input",
    name: "words",
    message:"please enter you sentences"

}])

console.log("\n\t",chalk.bgMagentaBright.bold(user_ans.words)+"\n\t");


if(user_ans.words !== " "){
let answer = user_ans.words.trim().split(" ")

console.log(answer);
console.log(chalk.bgGray.bold(`\n\t Your sentence words count is ${answer.length} words`));

}}else {
    console.log(chalk.bgCyanBright.bold("\n\t OK BY"));
    }

