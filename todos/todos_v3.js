//adding todos as objects instead of just strings

var todoList = {

    todos: [],

    displayTodos: function () {
        console.log('displaying todos', this.todos);
    },

    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
    },

    deleteTodo: function(position) {
        this.todos.splice(position, 1);
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