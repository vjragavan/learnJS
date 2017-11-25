// Added handlers instead of adding event listeners

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
        this.displayTodos();
    },

    updateTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
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
    },
};

var handler = {
    displayTodos: function() {
        todoList.displayTodos();
    },
    toggleAll: function() {
        todoList.toggleAll();
    },
    addTodo: function() {
        var addTodoTextField = document.getElementById('addTodoTextField');
        todoList.addTodo(addTodoTextField.value);
        addTodoTextField.value = '';
    },
    updateTodo: function() {
        var changeTodoTextField = document.getElementById('changeTodoTextField');
        var updatePositionTextField = document.getElementById('updatePositionTextField');
        todoList.updateTodo(updatePositionTextField.valueAsNumber, changeTodoTextField.value);
        changeTodoTextField.value = '';
        updatePositionTextField.value = '';
    },
    deleteTodo: function() {
        var deletePositionTextField = document.getElementById('deletePositionTextField');
        todoList.deleteTodo(deletePositionTextField.valueAsNumber);
        deletePositionTextField.value = '';
    },
    toggleTodo: function() {
        var togglePositionTextField = document.getElementById('togglePositionTextField');
        todoList.toggleCompleted(togglePositionTextField.valueAsNumber);
        togglePositionTextField.value = '';
    }

};
