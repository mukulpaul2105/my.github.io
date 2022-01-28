
// confirm("Do you want to delete Everything ?");  like allert

// Get Element By Id 

var button_reference = document.getElementById('initButton');
// click event. I want to listen to listen to this event. When this event 
// happens, I want to execute some function. I pass a callback!

/*button_reference.addEventListener('click', function() {/*
   alert("Button clicked");
})
*/

//  OR 

button_reference.addEventListener('click', abcd); // For double click function use "dblclick"

function abcd() {
   button_reference.innerText = "Changed Text";
   button_reference.style.backgroundColor = "#ff0000" ;
   window.location.href = "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg"; 
   
}

// Get Elements By Class Name

var imgs = document.getElementsByClassName('img_class');

//  Get Elements By the Tag Name

var inputs = document.getElementsByName('search');


// If I want to select all images who are child of the container class. 
// document.querySelector()
// To get reference of any css element by id
var cssElements = document.querySelector("#initButton");
// To Selects the first element that matches the css query. Only the first matched child will be selected 
console.log(cssElements);

// To Selects all the elements that matches the css query
var cssElements = document.querySelectorAll("#initButton");
console.log(cssElements);



