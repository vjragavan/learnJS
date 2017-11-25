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

    updateTodo: function(position, todoText) {
        this.todos[position] = todoText;
    }
};


todoList.displayTodos();
todoList.addTodo('8');
todoList.displayTodos();
todoList.updateTodo(0, 'newTodo');
todoList.displayTodos();
todoList.deleteTodo(2);
todoList.displayTodos();