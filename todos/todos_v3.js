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
    }
};

todoList.addTodo('Test1');
todoList.addTodo('Test2');
todoList.addTodo('Test3');
todoList.displayTodos();
todoList.deleteTodo(1);
todoList.displayTodos();