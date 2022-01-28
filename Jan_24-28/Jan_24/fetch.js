
// UL = Unorder List ( doesnot comes with serial numbers)
// OL = Order List ( comes with serial numbers)

/* Fetching rule
fetch(url)
   .then((x) => x.json())
   .then((y) => {
      functionality // here create fuction of any condition to reder the data in the viewport
   });

var container = document.getElementById("container");

/*
// Take the data from the api and make a table with the data
var table = document.getElementById("table");

var url = "http://universities.hipolabs.com/search?country=india";

fetch(url)
   .then((response) => {
      console.log("inside first then");
      return response.json();
   })
   .then((data) => {
   console.log("inside second then");
   console.log(data);
   for(var i = 0; i < data.length; i++) { //This loop will create individual td for each data name
      //var element = document.createElement("div");
      //element.appendChild(element);
      var tr = document.createElement("tr");
      var td = document.createElement("td");
      td.innerText = data[i].name;
      tr.appendChild(td);
      table.appendChild(tr);
   }
})
.catch((err) => console.log("api has failed"));
*/

// creating list with the data 
// Same as upper one but instead of making table here we will list the items

var table = document.getElementById("table");

var url = "http://universities.hipolabs.com/search?country=india";

fetch(url)
   .then((response) => {
      console.log("inside first then");
      return response.json();
   })
   .then((data) => {
   console.log("inside second then");
   console.log(data);
   for(var i = 0; i < data.length; i++) { //This loop will create individual td for each data name
      var li = document.createElement("li");
      var div1 = document.createElement("div"); // creating div inside which there will be institute name
      var div2 = document.createElement("div"); // creating div inside which there will be state name
      div1.innerText = data[i].name;
      div2.innerText = data[i]["state-province"];

      li.appendChild(div1); // allocating div inside the list (li)
      li.appendChild(div2); 

      ol.appendChild(li);
   }
})
.catch((err) => console.log("api has failed"));

