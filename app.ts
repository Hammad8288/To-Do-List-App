#! /usr/bin/env node

import inquirer from "inquirer";

let todolist = [];
let conditions = true;

console.log("\n \t Welcome To My Todo List Application \n");

// while(conditions){
//     let addTask = await inquirer.prompt([
//         {
//              name : "task",
//              type : "input",
//              message : "Enter Your New Task",
//         }
//     ]);
//     todolist.push(addTask.task),
//     console.log(`${addTask.task} Task Added In Todo List Sucessfully`)

//     let addMoreTask = await inquirer.prompt([
//         {
//             name : "addmore",
//             type : "confirm",
//             message : "Do You Want To Add More task",
//             default : "false",
//         }
//     ]);
//     conditions = addMoreTask.addmore
// }

// console.log("Your Updated Todo List Is " , todolist) ;

while (conditions) {
  let option = await inquirer.prompt([
    {
      name: "choice",
      type: "list",
      message: "Select An Option You Wanna Do",
      choices: ["Add Task", "Delete Task","Update Task","View To-Do List","Exit"],
    },
  ]);

  if (option.choice === "Add Task") {
    let newTask = await inquirer.prompt([
      {
        name: "task",
        type: "input",
        message: "Enter Your New Task ",
      },
     ]);
      todolist.push(newTask.task);
      console.log(`${newTask.task} Task Added Sucessfully In ToDo List`);
      console.log("Your Updated Todo List Is ", todolist);
     }
   else if (option.choice === "Delete Task") {
     let deleteTask = await inquirer.prompt([
      {
        name: "delete",
        type: "list",
        message: "Select An Item You Wanna Delete",
        choices: todolist,
      },
    ]);

    let index = todolist.indexOf(deleteTask.delete);

    if (index >= 0) {
      todolist.splice(index, 1);
    }

        console.log(`${deleteTask.delete} Deleted Sucessfully`);
      console.log("Your Updated Todo List Is ", todolist);
      }
  
     else if (option.choice === "Update Task") {
     let updateTask = await inquirer.prompt([
      {
        name: "update",
        type: "list",
        message: "Select An Item You Wanna Update",
        choices: todolist,
      },
    ]);

    let userInput = await inquirer.prompt([
      {
        name: "input",
        type: "input",
        message: "Enter Your Updated Task ",
      },
    ]);
    let index = todolist.indexOf(updateTask.update);

    if (index >= 0) {
      todolist.splice(index, 1, userInput.input);
     }
     console.log(`${updateTask.update} Updated with ${userInput.input} Sucessfully`);
     console.log("Your Updated Todo List Is ", todolist);

    }
     else if (option.choice === "View To-Do List") {
      console.log("Your To-Do List Is : \n ");
      todolist.forEach((task, index) => {
      console.log(`${index + 1} ${task}`);
    });
   }
   else if (option.choice === "Exit") {
    conditions = false;
  }
} ;
