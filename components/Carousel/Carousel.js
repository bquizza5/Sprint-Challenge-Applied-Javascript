imgCounter = 1
console.log(imgCounter)
class Carousel {
    constructor(carousel){
        
        this.carousel = carousel;
        this.leftButton = document.querySelector('.left-button');
        this.rightButton = document.querySelector('.right-button');
        this.imgList = document.querySelectorAll('.carousel-img');
        this.leftButton.addEventListener('click', () => this.leftClick());
        this.rightButton.addEventListener('click', () => this.rightClick());
        this.displayImg();
    }
    displayImg(){
        let images = document.querySelectorAll('.carousel-img');
        images.forEach(function(img){
            img.style.display = 'none'
        })
        let newImg = document.querySelector(`.carousel-img[data-tab='${imgCounter}']`); 
        newImg.style.display = 'inline';
    }
    leftClick() {
        if(imgCounter != 1){
            imgCounter -= 1;
            console.log(imgCounter);
            this.displayImg();
        } else {
            imgCounter = (this.imgList.length);
            console.log(imgCounter);
            this.displayImg();
        }
        this.displayImg();
    }
    rightClick() {
        if(imgCounter != this.imgList.length){
            imgCounter += 1;
            console.log(imgCounter);
            this.displayImg();
        } else {
            imgCounter = 1;
            console.log(imgCounter);
            this.displayImg();
        }
        
    }
}


let carousel = document.querySelector('.carousel');

let newCarousel = new Carousel(carousel);
console.log('newCarousel.images');

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

