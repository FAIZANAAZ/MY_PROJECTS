import inquirer from "inquirer";
import chalk from "chalk";
let todo_list = [];
let condition = true;
console.log(chalk.bgRedBright("\n\t" + "WELCOME IN FAIZA-NAAZ TODO_LIST APPLICATION" + "\n"));
while (condition) {
    let todotask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task !",
        }
    ]);
    todo_list.push(todotask.task);
    console.log(chalk.blue(`\n\t ${todotask.task} Task ! Added in Todo-list  successfully \t\n `));
    console.log(todo_list);
    let add_more_list = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more task ? ",
            default: "false",
        },
    ]);
    condition = add_more_list.addmore;
}
console.log(chalk.bgGray("\n\t" + "Your Updated Todo List : " + "\n\t"));
console.log(todo_list);
