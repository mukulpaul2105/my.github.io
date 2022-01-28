var button = document.getElementById("button");
var table = document.querySelector('.table');

button.addEventListener('click', loadData);

function loadData() {
   var url = "http://universities.hipolabs.com/search?country=india";

   fetch(url)
      .then((load) => load.json())
      .then((data) => {
         console.log(data);
         for(i = 0; i < data.length; i++) {
            var tr = document.createElement("tr");
            tr.classList.add("tr");
            var td = document.createElement("td");
            td.classList.add("td");

            var div1 = document.createElement("div");
            div1.classList.add("country");

            var div2 = document.createElement("div");
            div2.classList.add("domain");

            var div3 = document.createElement("div");
            div3.classList.add("name");
            var div4 = document.createElement("div");
            div4.classList.add("state");

            div1.innerText = data[i].country;
            div2.innerText = data[i].domains[0];
            div3.innerText = data[i].name;
            div4.innerText = data[i]["state-province"];

            td.appendChild(div1);
            td.appendChild(div2);
            td.appendChild(div3);
            td.appendChild(div4);
            tr.appendChild(td);
            table.appendChild(tr);
            
         }
      })
      .catch((err) => console.log("api has failed"));
}
