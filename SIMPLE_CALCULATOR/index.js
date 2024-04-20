#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const anwser = await inquirer.prompt([
    { message: "Enter first number ", type: "number", name: "firstnumber" },
    { message: "Enter second number ", type: "number", name: "secondtnumber" },
    { message: "Select one of the operators to perform operation ", type: "list", name: 'operators',
        choices: ['Addition', 'Subtraction', 'Multiplication', 'Division', 'Exponant', 'Module']
    },
]);
if (anwser.operators === 'Addition') {
    console.log(chalk.bgGreenBright.bold('\n\t ', anwser.firstnumber + anwser.secondtnumber));
}
else if (anwser.operators === 'Subtraction') {
    console.log('\n\t ', anwser.firstnumber - anwser.secondtnumber);
}
else if (anwser.operators === 'Multiplication') {
    console.log(chalk.bgGreenBright.bold('\n\t ', anwser.firstnumber * anwser.secondtnumber));
}
else if (anwser.operators === 'Division') {
    console.log(chalk.bgGreenBright.bold('\n\t ', anwser.firstnumber / anwser.secondtnumber));
}
else if (anwser.operators === 'Exponant') {
    console.log(chalk.bgGreenBright.bold('\n\t ', anwser.firstnumber ** anwser.secondtnumber));
}
else if (anwser.operators === 'Module') {
    console.log(chalk.bgGreenBright.bold('\n\t ', anwser.firstnumber % anwser.secondtnumber));
}
else {
    console.log(chalk.bgRedBright.bold('\n\t ', 'Please select a valid operator'));
}
