//created an object notation of the todos

var todoList = {

    todos: ['1','2','5,'],

    displayTodos: function () {
        console.log('displaying todos', this.todos);
    },

    addTodo: function(todoText) {
        this.todos.push(todoText);
    },

    deleteTodo: function(position) {
        this.todos.splice(position, 1);
    },
};


todolist.displayTodos();
todolist.addTodo('8');
todolist.displayTodos();
todolist.deleteTodo(2);
todolist.displayTodos();