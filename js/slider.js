const imageArray = [
    "images/pic-1.png",
    "images/pic-2.png",
    "images/pic-3.png",
    "images/pic-4.png",
    "images/pic-5.png",
    "images/pic-6.png",
    "images/pic-7.png",
    "images/pic-8.png",
    "images/pic-9.png"
];
let imgIndex = 0;
const getImg = document.getElementById('slider-image');
setInterval(() => {
    if(imgIndex>=imageArray.length){
        imgIndex = 0;
    }
    let image = imageArray[imgIndex];
    getImg.setAttribute('src',image);
    imgIndex ++;
    
}, 1000);