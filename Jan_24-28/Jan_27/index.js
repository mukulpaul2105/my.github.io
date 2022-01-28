
// In jS where the data is saved is called state / current state means current data


/*
My todo item should look like this :

{
   id : name/number/string
   name: "string";
}

To print this in my screen we have to append this somewhere 
*/

/*

var todoListElement = document.querySelector(".todo_list");

var form = document.querySelector(".input_form");

var inputElement = document.querySelector(".input_form input");

form.addEventListener("submit", addTodoItem);
*/
//var todoItem = {
 //  id : 1,
  // name : "have dinner with friend",
//};

/* To create list with existing data we will do this

function addTodoItem(e) { // Event in short form = e
   e.preventDefault();
   console.log(inputElement.value);

   var todoHTML = `<div class="todo_item">
   <span>${todoItem.name}</span>
   <i class="fa fa-trash-o"></i>
   </div>`

   // todoListElement.innerHTML = todoHTML;// These will clear all the elments
   // and the text inside the todoHTML will be only rendered
   // To add another item with existing list we have to do

   todoListElement.innerHTML += todoHTML;
}
*/ 

// Else we have to create list by own then 

/*
function addTodoItem(e) { // Event in short form = e
   e.preventDefault();
   console.log(inputElement.value);

   // here we are adding what ever we want
   var todoHTML = `<div class="todo_item">
   <span>${inputElement.value}</span> 
   <i class="fa fa-trash-o"></i>
   </div>`

   // todoListElement.innerHTML = todoHTML;// These will clear all the elments
   // and the text inside the todoHTML will be only rendered
   // To add another item with existing list we have to do

   todoListElement.innerHTML += todoHTML;
}
*/


// OR

// from starting


var todoListElement = document.querySelector(".todo_list");

var form = document.querySelector(".input_form");

var inputElement = document.querySelector(".input_form input");

form.addEventListener("submit", addTodoItem);

function addTodoItem(e) {
   e.preventDefault();

   if(inputElement.value !== "") {
     // printItemToScreen(inputElement.value); // this will show the the data as we want
     // but we will be able to access it . To access it we can do this
     state.todos.push(inputElement.value); // Input typed element will be stored in this array
     printItemToScreen(inputElement.value); // To render it to the viewport
      inputElement.value = ""; // after every click we need to clear the input area
      
   }
   console.log(state);
}

function printItemToScreen(todoItem) {
   
   var todoHTML = `<div class="todo_item"  >
   <span id="item-${todoItem}">${todoItem}</span>
   <button onclick="doubleItem('${todoItem}')">Edit</button>
   <i onclick="deleteItem('${todoItem}')" class="fa fa-trash-o style="font-size:20px;color:red""></i>
 </div>`;

   todoListElement.innerHTML += todoHTML;
}
// Here we are printing the items but we don't have any control/ access 
// inside my javaScript . So to have control we can do this

// Here our data will be store in array form
var state = {
   todos : [],
};

function deleteItem(item) {
   var index = state.todos.indexOf(item);
   state.todos.splice(index, 1);
   console.log(state.todos);
   renderArray();
}

function renderArray() {
   todoListElement.innerHTML = "";
   for(i in state.todos) {
      printItemToScreen(state.todos[i]);
   }
}

function editItem(item) {
   
}







// To anything between 
/// Which we used in printItemToScreen function

// Either we can do
// createElement(div).innerText = "something";
// or 

//var name = "hey geeks";
//Element.innerHTML = `<div>${name}</div>`