#!/usr/bin/env node

import inquirer from "inquirer";


let total_balance : number = 20000 ;
let atm_pin : number =  37290;
let message : string = "THANKS FOR USING ATM MACHINE !"  
console.log( '\n\t'+  message  + "\n\t"); 




let pinanswer = await inquirer.prompt(
    [
    {
        name : "pin",
        message : "please enter your pin number",
        type : "number" 
        
        }]);



if(pinanswer.pin === atm_pin){
    
    console.log("\n\t"+" your pin is correct!"+ "\n\t");


    let operation = await inquirer.prompt([
        {

        name: "option" ,
        message: "please select one option",
        type : "list" ,
        choices :["withdraw","check balance","Fast cash"] 
}
]
);

if(operation.option=== "check balance"){

    console.log("\n\t"+`your account balance is :${total_balance} `);
    
}




     
if(operation.option === "Fast cash" ){
    let fastcashans= await inquirer.prompt([{

        name: 'cash',
        message:'\n'+'Enter your Fast cash amount',
        type:'list',
        choices:["500","1000",'5000','10000','15000','20000']
       }
    ]
    )

if(  fastcashans.cash === '500'){
    console.log("\n\t"+"withdraw 500 from your account");
    }


if(fastcashans.cash === '1000' ){
    console.log("\n\t"+'withdraw 1000 from your account');
    
}

if(fastcashans.cash === '5000' ){
    console.log("\n\t"+"withdraw 5000 from your account"); 
}
    
if(fastcashans.cash === '10000' ){
    console.log("\n\t"+"withdraw 10000 from your account"); 
}

if(fastcashans.cash === '15000' ){
    console.log("\n\t"+"withdraw 15000 from your account"); 
}

if(fastcashans.cash === '20000'){
    console.log("\n\t"+"withdraw 20000 from your account"); 
} }




    if(operation.option === "withdraw" ){
        let amountans = await inquirer.prompt([{

            name: 'amount',
            message:'Enter your amount',
            type:'number',
           
        }
    ]
    );


    
    if (amountans.amount > total_balance){
        console.log("\n\t"+"your account does not have balance "+ "\n\t");
    }


    
    else if(amountans.amount < total_balance) {
    total_balance -=amountans.amount 
        console.log("\n\t"+"your remaning amount is " + total_balance + "\n\t")}



    
else if(amountans.amount === total_balance){
   console.log("\n\t"+"your remaning balance is Empty"+ "\n\t");
   
}

 }
}
    

else{console.log("\n\t"+ "incrrect pin code ");
    } 