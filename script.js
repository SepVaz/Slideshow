const slide = document.querySelector(".container img")
const imgArray = ["images/GUSC1.jpg", "images/GUSC2.jpg", "images/GUSC3.jpg", "images/GUSC4.jpg"]
const buttonOne = document.querySelector(".btn-one")
const buttonTwo = document.querySelector(".btn-two")

let index = 0;

buttonTwo.addEventListener("click", function(){
    index++;

    if (index >= imgArray.length) {
        index = 0;
    }
    slide.src = imgArray[index];

})

buttonOne.addEventListener("click", function(){
    index--;

    if (index < 0) {
        index = imgArray.length - 1
    }
    
    slide.src = imgArray[index];

})



