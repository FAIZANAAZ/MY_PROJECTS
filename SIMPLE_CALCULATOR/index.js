#!/usr/bin/env node
import inquirer from "inquirer";
const anwser = await inquirer.prompt([
    { message: "Enter first number ", type: "number", name: "firstnumber" },
    { message: "Enter second number ", type: "number", name: "secondtnumber" },
    { message: "Select one of the operators to perform operation ", type: "list", name: 'operators',
        choices: ['Addition', 'Subtraction', 'Multiplication', 'Division']
    },
]);
if (anwser.operators === 'Addition') {
    console.log(anwser.firstnumber + anwser.secondtnumber);
}
else if (anwser.operators === 'Subtraction') {
    console.log(anwser.firstnumber - anwser.secondtnumber);
}
else if (anwser.operators === 'Multiplication') {
    console.log(anwser.firstnumber * anwser.secondtnumber);
}
else if (anwser.operators === 'Division') {
    console.log(anwser.firstnumber / anwser.secondtnumber);
}
else {
    console.log('Please select a valid operator');
}
