let hoops = document.getElementsByClassName('hoop')
console.log(hoops)
let banner = document.getElementById('banner');
// let slideImages = [];

//  slideImages[0] = "url(https://images.samsung.com/is/image/samsung/assets/us/home/06242024/SDSAC-7677-Watch-FE-Launch-HP-KV-DT-1440x640-new.jpg?imwidth=2560)";
//  slideImages[1] = "url(https://images.samsung.com/is/image/samsung/assets/us/home/07102024/Scom_HP_KV2_Watches-pc.jpg?imwidth=2560)"
//  slideImages[2] = "url(https://images.samsung.com/is/image/samsung/assets/us/home/07122024-2/W29_KV1_D_1440x6401x.jpg?imwidth=2560)"
//  slideImages[3] = "url(https://images.samsung.com/is/image/samsung/assets/us/home/7152024-2/SDSAC-7754-OLED-HP-Hero-Carousel-DT-1440x640.jpg?imwidth=2560)"

let cur = 0;

function prevSlide() {
  console.log(cur)
  hoops[cur].style.display = 'none';

  cur--;
  if (cur < 0) {
    cur = 2
  } 
  console.log(cur)
  hoops[cur].style.display = 'block';
}

function nextSlide() {
  console.log(cur)
  hoops[cur].style.display = 'none';

  cur++;
  if (cur > 2) {
    cur = 0
  } 
  console.log(cur)
  hoops[cur].style.display = 'block';
}

// function nextSlide() {
//   cur++;
//   if (cur > 1) {
//     cur = 0;
//   } 

//   banner.style.backgroundImage = slideImages[cur]
// }


