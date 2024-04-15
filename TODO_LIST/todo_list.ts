#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
let todo_list = [];
let condition = true;
console.log(
  chalk.bgRedBright(
    "\n\t" + "WELCOME IN FAIZA-NAAZ TODO_LIST APP" + "\n"
  )
);

while (condition  ) {
  let todooption = await inquirer.prompt([
    {
      name: "option",
      type: "list",
      message: "select one option!",
      choices: ['Add','Reamove']
     
    }
  ]);
//.....................add..............

  if(todooption.option ==='Add' ){
    let select =await inquirer.prompt([{
      name: "task",
      type: "input",
      message: "Enter  sometging your task list!",
}])
  
   if (select.task !== ""){

 todo_list.push(select.task)
 console.log(
  chalk.blue(`\n\t ${select.task} Task ! Added in Todo-list  successfully \t\n `));
console.log(todo_list);
 
  }else {
    console.log(chalk.bgRed(`\n\t please Add something in your todo list`));
    
  }}

 //.......................remove.............

  else if(todooption.option ==='Reamove' ){
      let removechoice = await inquirer.prompt([{
        name: "removeitem",
        type: "list",
        message: "What do you want to remove!",
        choices: todo_list
  }]);

  let index_to_remove = todo_list.indexOf(removechoice.removeitem)

if(index_to_remove >= 0){
  todo_list.splice( index_to_remove,1);
  console.log("\n\t"+"You remove :" ,chalk.bgRed (removechoice.removeitem));
  console.log(todo_list);
  }
}
//..............confirm.............
let user_ans = await inquirer.prompt([{
  name:'selection',
  type:'confirm',
  message: 'Do you want to continue?',
  default:true

}]);

if(user_ans.selection === false){
  
   condition = false;
   console.log(chalk.bgGreen("\n\t"+'Your updated Todo List '), todo_list);
   
}
}