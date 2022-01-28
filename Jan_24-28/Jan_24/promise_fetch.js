setTimeout(func1, 3000); // func1 will execute after 3000milisec means 3 sec

function func1() {
  console.log("Hello is printed after 3sec");
}

// Promise

/* The example 
var myPromise = new Promise(x); 
funtion x(resolve, reject) {
   if(today date is 25) {
      resolve("geek");

   } else {
      reject("not a geek");
   }
}
*/
/*
var someonesPromise = new Promise((resolve, reject) => {
   //resolve("Promise is kept")

   reject("Promise is not kept")
});

//someonesPromise.then().catch() // then() = promise kept, catch() = promise is not kept

someonesPromise.then(onFullfill).catch(notFullfill)

function onFullfill(arg){
   console.log("Yeah! your",arg);
}

function notFullfill(arg) {
   console.log("sorry but ", arg);
}
*/

// Fetch
/*
var url =
  "https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true";

var data = fetch(url);

data.then(onFullfill).then(onSecondFullfill);

function onFullfill(arg) {
  return arg.json();
}

function notFullfill(arg) {
  console.log("sorry but ", arg);
}

// There is nested promises are there with the url that's why we are entering into every promises

function onSecondFullfill(arg) {
  console.log("Finaly", arg);
}
*/
// This is the lengthy way
// Shorter way to write this code is like
/*
fetch(url)
  .then((res) => res.json())
  .then((finalData) => {//console.log(finalData)); // Here we can see the object in console
      document.write(finalData.activeCasesNew); // taking values from inside the object with key
  }); 
*/

/*
var newURL = "http://universities.hipolabs.com/search?country={country name}"; // we have to put {country} = india

fetch(newURL)
  .then((something) => something.json())
  .then((response) => console.log(response));
*/