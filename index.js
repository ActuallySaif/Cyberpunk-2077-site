let imgs = ['Images/img1.jpg', 'Images/img2.jpg', 'Images/img3.jpg', 'Images/img4.jpg', 'Images/img5.jpg']
let infoImg = document.getElementById('infoImg');
let imgIndex = Math.floor(Math.random() * imgs.length)

infoImg.style.background = `url(${imgs[imgIndex]})`;
infoImg.style.backgroundSize = 'cover'

console.log(imgIndex)