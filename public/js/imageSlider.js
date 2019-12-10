const i= 0;
let images =[];
var time= 3000;

images[0] = '/static/images/image1.jpg';
images[1] = '/static/images/image2.jpg';
images[2] =  '/static/images/image3.jpg';
images[3] =  '/static/images/image4.jpg';

function changeImg(){
    document.slide.src = image[i];

    if(i< images.length-1){
        i++;
    }else{
        i = 0;
    }

    setTimeout("changeImg()",time);
}
window.onload = changeImg;