//To Do List App
//Author: Ashley Kung
//Created: 7/2/19
// Will be improved iteratively as I gain advanced JS skills.

let todoList = {
  todos: [],
  
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log("To do list is empty.");
    } else {
      console.log("My To Dos:");
      for (let i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log('(x) ' + this.todos[i].item);
        } else {
          console.log('( ) ' + this.todos[i].item);
        };
      };
    };
  },
  
  addTodo: function(item) {
    this.todos.push({ item: item, completed: false });
    this.displayTodos();
  },
  
  changeTodo: function(itemIndex, newValue) {
    this.todos[itemIndex].item = newValue;
    this.displayTodos();
  },
  
  toggleCompleted: function(itemIndex) {
    let todo = this.todos[itemIndex];
    todo.completed = !todo.completed;
  },
  
  toggleAll: function() {
    var totalToDos = this.todos.length;
    var completedToDos = 0;
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].completed === true) {
        completedToDos++;
      }
    }
    if (totalToDos === completedToDos) {
    for (let j = 0; j < this.todos.length; j++) {
      this.todos[j].completed = false;
    }
    } else {
      for (let k = 0; k < this.todos.length; k++) {
        this.todos[k].completed = true;
      }
    }
    this.displayTodos();
  },
  
  deleteTodo: function(itemIndex) {
    this.todos.splice(itemIndex, 1);
    this.displayTodos();
  }
};

//Get access to Display To Dos button
let displayTodosButton = document.getElementById('display-btn');

//Run displayTodos method when Display To Dos button is clicked
displayTodosButton.addEventListener('click', function() {
  todoList.displayTodos();
});

//Get access to Toggle All button
let toggleAllButton = document.getElementById('toggle-all-btn');

//Run toggleAll method when Toggle All button is clicked
toggleAllButton.addEventListener('click', function() {
  todoList.toggleAll();
});
