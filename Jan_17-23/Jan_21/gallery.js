 
var button_reference = document.getElementById('initButton');

var img_arr = [
   'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
   'http://www.goodmorningimagesdownload.com/wp-content/uploads/2019/12/Love-Images-1.jpg',
   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTgprn5Qg0GV5I5wtWqajwcelRLsYiQCCaBlQxMnPp7rHga7elq5KTvv7BHiTtnt060dA&usqp=CAU',
   'https://i.pinimg.com/originals/a7/3d/6e/a73d6e4ac85c6a822841e449b24c78e1.jpg',
   'https://ghantee.com/wp-content/uploads/2020/07/beautiful-shivling-wallpaper-for-mobile-full-HD-576x1024.jpg',
   'https://live.staticflickr.com/4246/34051788833_93749cdf44_b.jpg',
   'https://vinusimages.co/wp-content/uploads/2018/10/EG7A2390.jpgA_.jpg',
   'https://expertphotography.b-cdn.net/wp-content/uploads/2021/02/children-photographers-2-1.jpg',
   'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
   'https://i.pinimg.com/474x/01/88/dc/0188dc41881e0e410b5375cdead5f49a.jpg',
   'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/F6INOOMSRRL5XOOQDRPZUWPWBA.jpg',
   'https://media.istockphoto.com/photos/guwahati-city-picture-id1005419626?k=20&m=1005419626&s=612x612&w=0&h=V2UxS-lDz2u7zGF15jwZBorFtLePzcKtHTkTDyI1_zU=',
   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW4Wam9IQiZjp_FYkZrrd99kUqESCo0RZDzg&usqp=CAU',
   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW4Wam9IQiZjp_FYkZrrd99kUqESCo0RZDzg&usqp=CAU',
   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdX029ohIUSygq9zirl9fSNBwSLqEOaKEYuw&usqp=CAU',
   'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
   'https://media.istockphoto.com/photos/concept-of-an-open-magic-book-open-pages-with-water-and-land-and-picture-id1279460648?b=1&k=20&m=1279460648&s=170667a&w=0&h=uZa830sWo8hlFN0Y7FnQ14giNC0Z2EBNuTMuNJeJhQg=',
   'https://funkylife.in/wp-content/uploads/2021/06/good-night-images-34.jpg',
   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0PR2ZAzwhWY7orX3aNxJE67X5TaAjAN7H_g&usqp=CAU',
   'https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTynHfBuLHkLUNPZFkIHShI0Z4NL2-h-wC76Q&usqp=CAU',
   'https://cdn.cnn.com/cnnnext/dam/assets/181215042152-nasa-juno-01-exlarge-169.jpg',
   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkgXWUMr_Vcw6KhaHLTy0SNSljgWrMIi5rFQ&usqp=CAU',
   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTK500IQ_2NpiNk7Ed_4phbWDtLSZ7QGWuNA&usqp=CAU',
   'https://media.istockphoto.com/photos/hand-holding-heart-against-sparkling-golden-bokeh-lights-picture-id1193218253?k=20&m=1193218253&s=612x612&w=0&h=867Eq3yPsTe0ReLD2GEjicWH-6Q-TB_N1k9KHcmtfUU=',
   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh6oPIzWAVL6bJTbPZ4N2paZ1xpqti-QRj7g&usqp=CAU', 
];


button_reference.addEventListener('click', showImages); 


function imageClicked (event) {
   var img_prev_r = document.getElementById("img_preview");
   img_prev_r.classList.remove("d-none");

      var img_r = img_prev_r.children[0];
      img_r.src = event.target.src;
   

}

function showImages() {
   var container_ref = document.getElementById("gallery_container"); 

   container_ref.innerText = "";

   for(var i = 0; i < img_arr.length; i = i + 1) {
      var img_ref = document.createElement("img"); 
      img_ref.src = img_arr[i];
      
      img_ref.addEventListener('click', imageClicked)
      container_ref.appendChild(img_ref);
   }
}


cencel.addEventListener('click',Close);

    function Close(){
        var img_prev_r = document.getElementById("img_preview");
        img_prev_r.classList.add("d-none");

    }