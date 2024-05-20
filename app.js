#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgMagenta("Welcome Todo List App"));
let Todos = [];
let loop = true;
while (loop) {
    let todoList = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "what you want to add in your Todo?",
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more Todo?",
            default: "false",
        },
    ]);
    let { todo, addMore } = todoList;
    console.log(todoList);
    loop = addMore;
    if (todo) {
        Todos.push(todo);
    }
    else {
        console.log(chalk.bgRed("Kindly enter valid input"));
    }
    console.log(Todos);
    if (todo.length > 0) {
        console.log(chalk.bgGrey("your todo list:"));
        Todos.forEach((todo) => {
            console.log(todo);
        });
    }
    else {
        console.log(chalk.bgRed("Not todo found"));
    }
}
