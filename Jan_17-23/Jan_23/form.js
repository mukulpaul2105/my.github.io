
var form = document.querySelector('.form');
var username = document.getElementById('username');
var email = document.getElementById('email');
var password = document.getElementById('password');
var conf_password = document.getElementById('conf_password');

/*
function validate() {
   var nameOfUser = username.value; // Thaking the value/ name typed inside the User Name
   console.log(nameOfUser);
   var formControl = username.parentElement;
   formControl.className = "form_control user";// Updating the class name
}
*/

// If we need to to check the input name is same as database or not then we use this approach
/* This is only for one input
function validate() {
   var nameOfUser = username.value;

   if (nameOfUser === "Geekster") {
      var formControl = username.parentElement;
      formControl.className = "form_control user" ;
   } else {
      var formControl = username.parentElement;
      formControl.className = "form_control failure";
      document.getElementById('error').innerText = "Username is invalid";
      
   }
}
*/

// To use same fuction for every inputs/ elemnts we have to use this approach

function validate(element) {
   var nameOfUser = element.value;

   if (nameOfUser === "Geekster") {
      var formControl = element.parentElement;
      formControl.className = "form_control user" ;
   } else {
      var formControl = element.parentElement;
      formControl.className = "form_control failure";
      document.getElementsByClassName(element.id);   
   }
}


form.addEventListener('submit', submitForm);

function submitForm(event) {
   event.preventDefault(); // It will not allow to refresh the form after pressing the submit button.

   //alert("Form has been submited");
   validate(username);
   validate(email);
   validate(password);
   validate(conf_password);
}



