	//To Do List App
//Author: Ashley Kung
//Created: 7/2/19
// Will be improved iteratively as I gain advanced JS skills.

let todoList = {
  todos: [],

//  displayTodos: function() {
//    if (this.todos.length === 0) {
//      console.log("To do list is empty.");
//    } else {
//      console.log("My To Dos:");
//      for (let i = 0; i < this.todos.length; i++) {
//        if (this.todos[i].completed === true) {
//          console.log('(x) ' + this.todos[i].item);
//        } else {
//          console.log('( ) ' + this.todos[i].item);
//        };
//      };
//    };
//  },

  addTodo: function(item) {
    this.todos.push({ item: item, completed: false });
//    this.displayTodos();
  },

  changeTodo: function(itemIndex, newValue) {
    this.todos[itemIndex].item = newValue;
//    this.displayTodos();
  },

  toggleCompleted: function(itemIndex) {
    let todo = this.todos[itemIndex];
    todo.completed = !todo.completed;
//	this.displayTodos();
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
//    this.displayTodos();
  },

  deleteTodo: function(itemIndex) {
    this.todos.splice(itemIndex, 1);
//    this.displayTodos();
  }
};



let view = {
	displayTodos: function() {
		let unorderedList = document.querySelector('ul');
		unorderedList.innerHTML = '';
		for (let i = 0; i < todoList.todos.length; i++) {
		  let todoListItem = document.createElement('li');
		  if (todoList.todos[i].completed === false) {
		    todoListItem.textContent = '( ) ' + todoList.todos[i].item;
		    unorderedList.appendChild(todoListItem);
		  } else {
		    todoListItem.textContent = '(x) ' + todoList.todos[i].item;
		    unorderedList.appendChild(todoListItem);
		  }
		}
	}
};



//Set up Display To Dos button
//let displayTodosButton = document.getElementById('display-btn');
//displayTodosButton.addEventListener('click', function() {
//	todoList.displayTodos();
//});

//Set up Toggle All button
let toggleAllButton = document.getElementById('toggle-all-btn');
toggleAllButton.addEventListener('click', function() {
	todoList.toggleAll();
	view.displayTodos();
});

//Set up Toggle Item button
let toggleTodoButton = document.getElementById('toggle-todo-btn');
let toggleTodoPositionInput = document.getElementById('toggle-todo-position');
toggleTodoButton.addEventListener('click', function() {
	todoList.toggleCompleted(toggleTodoPositionInput.valueAsNumber-1);
	view.displayTodos();
});

//Set up Add To Do button
let addTodoButton = document.getElementById('add-todo-btn');
let addTodoTextInput = document.getElementById('add-todo-input');
addTodoButton.addEventListener('click', function() {
	todoList.addTodo(addTodoTextInput.value);
	view.displayTodos();
});

//Set up Change To Do button
let changeTodoButton = document.getElementById('change-todo-btn');
let changeTodoPositionInput = document.getElementById('change-todo-position');
let changeTodoTextInput = document.getElementById('change-todo-text');
changeTodoButton.addEventListener('click', function() {
	todoList.changeTodo(changeTodoPositionInput.valueAsNumber-1,changeTodoTextInput.value);
	view.displayTodos();
});

//Set up Delete Item button
let deleteTodoButton = document.getElementById('delete-todo-btn');
let deleteTodoPositionInput = document.getElementById('delete-todo-position');
deleteTodoButton.addEventListener('click', function() {
	todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber-1);
	view.displayTodos();
});