const imgcontainer = document.getElementById("imgcontainer");
const img1 = document.createElement("img");
const img2 = document.createElement("img");
const img3 = document.createElement("img");
const img4 = document.createElement("img");

img1.src = "./assets/img/pexels-ali-ramazan-çiftçi-13522034.jpg";

img2.src = "./assets/img/pexels-aron-visuals-3596370.jpg";

img3.src = "./assets/img/pexels-nadi-lindsay-5171018.jpg";

img4.src = "./assets/img/pexels-tetyana-kovyrina-11742011.jpg";

const arrayImg = [img1.src, img2.src, img3.src, img4.src];
imgcontainer.insertBefore(img1, imgcontainer.firstChild);
img1.classList.add("imganimation");
img1.classList.add("imganimation:hover");

const getButton = document.getElementById("scrollbtnA");
getButton.addEventListener("click", scrollNextImg);

let imageIndex = 0;
function scrollNextImg() {
  img1.src = arrayImg[imageIndex];
  imageIndex++;
  if (imageIndex === 4) {
    imageIndex = 0;
  }
}
