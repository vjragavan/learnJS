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
            completed: false
        });
        this.displayTodos();
    },

    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },

    toggleCompleted: function(position) {
        this.todos[position].completed = !this.todos[position].completed;
    },

    toggleAll: function() {
        var completed = 0;
        var totalTodos = this.todos.length;

        //count completed
        for (var i=0; i<totalTodos; i++)
            if (this.todos[i].completed === true)
                completed++;

        //case 1 : if all are completed, mark them false
        if (completed === totalTodos) {
            for (i=0; i<totalTodos; i++)
                this.todos[i].completed = false;
        }
        else {
            for (i=0; i<totalTodos; i++)
                this.todos[i].completed = true;
        }

        this.displayTodos();
    }
};


var displayTodosButton = document.getElementById('displayTodosButton');
displayTodosButton.addEventListener('click', function() {
    todoList.displayTodos();
});

var toggleAllButton = document.getElementById('toggleAllButton');
toggleAllButton.addEventListener('click', function(){
    todoList.toggleAll();
});
