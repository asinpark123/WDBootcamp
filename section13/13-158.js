var todos = [];

var input = prompt("What would you like to do?");

while (input != "quit"){
    if(input === "list"){
        console.log(todos);
    }
    
    else if(input === "new"){
        var newTodo = prompt("Enter a new todo");
        todos.push(newTodo);
        console.log(todos);
    }
    input = prompt("What would you like to do?");
}
console.log("Good Bye");