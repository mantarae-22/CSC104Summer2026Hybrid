 // array with the image locations - you can add as many images as you want in the array
 let arrImages = [
    "./images/camille-minouflet-d7M5Xramf8g-unsplash.jpg",
    "./images/derek-thomson-TWoL-QCZubY-unsplash.jpg",
    "./images/geio-tischler-VKFHp6UQncE-unsplash.jpg",
    "./images/sean-oulashin-KMn4VEeEPR8-unsplash.jpg"
];

// variable to keep track of the current image index
let currImage = 0;

// show slide - pass in the index of the image to show
function showSlide(index){
    // get a shortcut/nickname to the img element in the HTML
    let image = document.getElementById("imgSlide");
    // change the image source to the relevant address from the array
    image.src = arrImages[index];
}

// previous button function click event
function prevSlide(){
    // when the user clicks the Previous button, change currImage to currImage - 1
    currImage--;

    // if the user is at the first image in the array, and they clicked the Previous button, let's show the last image in the array, to give a "loop effect"
    if (currImage < 0){
        // change currImage from -1 to the last index of the array
        currImage = arrImages.length - 1;
    }

    // load the new image
    showSlide(currImage);
}

// next button function click event
function nextSlide(){
    // when the user clicks the Previous button, change currImage to currImage + 1
    currImage++;

    // if currImage has exceeded the number of images in the array, then reset back to the first image for that "loop effect"
    if (currImage >= arrImages.length){
        currImage = 0;
    }

    // load the new image
    showSlide(currImage);
}