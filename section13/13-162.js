var todos = [];

var input = prompt("What would you like to do?");

while (input != "quit") {
    if (input === "list") {
        listTodo()
    }

    else if (input == "delete"){
        deleteTodo()
    }

    else if (input === "new") {
        newTodo()
    }
    input = prompt("What would you like to do?");
}
console.log("Good Bye");


// Todo Functions

function listTodo(){
    console.log("**********");
    todos.forEach(function (todo, i) {
        console.log(i + ". " + todo);
    })
    console.log("**********");
}

function deleteTodo(){
    var del = prompt("Enter the index of the todo you'd like to delete");
    todos.splice(del, 1);
    console.log("Deleted todo number " + del);
}

function newTodo(){
    var newTodo = prompt("Enter a new todo");
    todos.push(newTodo);
    console.log(todos);
    console.log("Added \'" + newTodo + "\' to the list");
}