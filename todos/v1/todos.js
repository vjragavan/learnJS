var todos = [];


function addTodo(newTodo) {
    todos.push(newTodo);
    console.log('added a new todo', todos);
}

function deleteTodo(position) {
    todos.splice(position, 1);
    console.log('deleted a todo', todos);
}

function updateTodo(position, newTodo) {
    todos[position] = newTodo;
    console.log('updated a todo', todos);
}

addTodo('write a medium post');
addTodo('write a twotter post');
updateTodo(1, 'write a twitter post');
addTodo('write a facebook post');
addTodo('reqd NY Times');
updateTodo(3, 'read NY Times');
deleteTodo(1);
