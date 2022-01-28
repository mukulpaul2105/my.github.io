 
var button_reference = document.getElementById('initButton');

var img_arr = [
   'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
   'http://www.goodmorningimagesdownload.com/wp-content/uploads/2019/12/Love-Images-1.jpg',
   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTgprn5Qg0GV5I5wtWqajwcelRLsYiQCCaBlQxMnPp7rHga7elq5KTvv7BHiTtnt060dA&usqp=CAU',
   'https://i.pinimg.com/originals/a7/3d/6e/a73d6e4ac85c6a822841e449b24c78e1.jpg',
   'https://ghantee.com/wp-content/uploads/2020/07/beautiful-shivling-wallpaper-for-mobile-full-HD-576x1024.jpg',
   'https://live.staticflickr.com/4246/34051788833_93749cdf44_b.jpg',  
];


button_reference.addEventListener('click', showImages); // For double click function use "dblclick"

/* By this only one image will be loaded again and again

function showImages() {
   // Since html is empty so there is no image as well as place for image
   // So we have to create element which is a type image tag <img>.
   var img_ref = document.createElement("img");


   // We created <img> but we have to mention/ locate where to load the images
   // So we have to give reference to the container where the images are going to be loaded.
   var container_ref = document.getElementById("gallery_container");

   // we have created image tag now we have to put link to that tag element
    // Will load the images from the array
   img_ref.src = img_arr[0];

   // appendChild will load the images to the html/ container/ voiwprt.
   container_ref.appendChild(img_ref);   

   // or we can use this approach to 
   container_ref.innerHTML = "<img src='image link'/>"; 
}
*/

// To show image preview by clicking the images
function imageClicked (event) {
   var img_prev_r = document.getElementById("img_preview");
   img_prev_r.classList.remove("d-none");
   // opposite of this we have ClassList.add("class_name");

   // console.log(img_prev_r.children[0]);

   // To get child reference by paarent's reference we use
   
   // .children[];
   // var img_r = img_prev_r.children[0];
   // img_r.src = img_arr[3];

   // OR in a single line
   
   // img_prev_r.children[0].src = img_arr[1];
   // .children[0] because there is only child and it takes as an object/ array that's why [0]
   // in this way we can load images dynamicaly by giving each link

      // BUt in this way can direct load the clicked image 
      // And for this approach we have to put event inside the function imageClicked()
      var img_r = img_prev_r.children[0];
      img_r.src = event.target.src;
   

}

// So to load all images with just a single click 
// We have to introduce loop with length of array

function showImages() {
   var container_ref = document.getElementById("gallery_container"); //Give the reference where the images should be loaded. 
   
   // The number of times the button being clicked that much number of thime the 
   // images will be loaded means repeats all the images.
   // To avoid it once we click the button the container will be clrear everything
   // than again will be loaded. So make empty than add.
   container_ref.innerText = "";

   for(var i = 0; i < img_arr.length; i = i + 1) {
      var img_ref = document.createElement("img"); // Crating an object in the memory , it is not adding to the DOM
      img_ref.src = img_arr[i]; // Attaching the source of the images
      
      img_ref.addEventListener('click', imageClicked)
      container_ref.appendChild(img_ref); // Placing the images as a child of the container.
   }
}


