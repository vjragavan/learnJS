// Code goes here

var todoList = {

    todos: [],

    displayTodos: function () {
        if (this.todos.length === 0)
            console.log('Todo list is empty!');
        else {
            console.log('My Todos');
            for (var i=0; i<this.todos.length; i++) {
                if (this.todos[i].completed === true) {
                    console.log ('(x) ',this.todos[i].todoText)
                } else {
                    console.log('( ) ',this.todos[i].todoText);
                }
            }
        }
    },

    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false,
        });
        this.displayTodos();
    },

    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },

    toggleCompleted: function(position) {
        this.todos[position].completed = !this.todos[position].completed;
    }
};

todoList.addTodo('Test1');
todoList.addTodo('Test2');
todoList.addTodo('Test3');
todoList.displayTodos();
todoList.toggleCompleted(2);
todoList.deleteTodo(1);
todoList.displayTodos();