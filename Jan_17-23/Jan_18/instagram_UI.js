
var heart = document.getElementById('heart');

heart.addEventListener('click', heart_react);


var count = 0;
function heart_react() {
   count++;
   if(count % 2 == 0) {
      heart.style.color = "#aaaaaa";
      heart2.style.color = "#aaaaaa";
      heart.style.fontSize = "24px";
      heart2.style.fontSize = "24px";
   } else {
      heart.style.color = "#fc3d03";
      heart2.style.color = "#fc3d03";
      heart.style.fontSize = "26px";
      heart2.style.fontSize = "26px";

   }
}
   


var heart2 = document.getElementById('heart2');

heart2.addEventListener('click', heart_react2);



function heart_react2() {
   count++;
   if(count % 2 == 0) {
      heart2.style.color = "#aaaaaa";
      heart.style.color = "#aaaaaa";
      heart.style.fontSize = "24px";
      heart2.style.fontSize = "24px";
   } else {
      heart2.style.color = "#fc3d03";
      heart.style.color = "#fc3d03";
      heart.style.fontSize = "26px";
      heart2.style.fontSize = "26px";
   }
}


var byImage = document.getElementById('upld_img');

byImage.addEventListener('dblclick', heart_react_by_img);


function heart_react_by_img() {
   count++;
   if(count % 2 == 0) {
      heart2.style.color = "#aaaaaa";
      heart.style.color = "#aaaaaa";
      heart.style.fontSize = "24px";
      heart2.style.fontSize = "24px";
      
   } else {
      heart2.style.color = "#fc3d03";
      heart.style.color = "#fc3d03";
      heart.style.fontSize = "26px";
      heart2.style.fontSize = "26px";
   }
}

var bookmark = document.getElementById('bookmarks');
bookmark.addEventListener('click', book_mark);


var counter = 0;
function book_mark() {
   counter++;
   if(counter % 2 == 0) {
      bookmark.style.color = "#aaaaaa";
      bookmark.style.fontSize = "24px";
      
   } else {
      bookmark.style.color = "#03fce3";
      bookmark.style.fontSize = "27px";
   }
}
