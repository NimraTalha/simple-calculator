#!/usr/bin/env node



import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstnumber" },
  { message: "Enter second number", type: "number", name: "secondnumber" },
  {
    message: "Select one of the operators to perform action",
    type: "list",
    name: "Operator",
    choices: ["Addition","Subtraction","Multipilication","Division"]
  },
]);
console.log(answer)
// conditional statement
if (answer.Operator === "Addition") {
    console.log( answer.firstnumber + answer.secondnumber)
}else if(answer.Operator === "Subtraction") {
    console.log( answer.firstnumber - answer.secondnumber)
}else if (answer.Operator === "Multipilication") {
    console.log( answer.firstnumber * answer.secondnumber)
}else if(answer.Operator === "Division") {
    console.log( answer.firstnumber / answer.secondnumber)
}
else {
    console.log("please select valid operator")
}

