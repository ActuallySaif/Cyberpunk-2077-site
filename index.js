let imgs = ['Images/img1.jpg', 'Images/img2.jpg', 'Images/img3.jpg', 'Images/img4.jpg', 'Images/img5.jpg']
let infoImg = document.getElementById('infoImg');
let imgIndex = Math.floor(Math.random() * imgs.length)

infoImg.style.background = `url(${imgs[imgIndex]})`;
infoImg.style.backgroundSize = 'cover'

console.log(imgIndex)



let cards = document.querySelectorAll('.charCard');

cards.forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
        cards.forEach(c => c.classList.remove('big'));

        if (index === 0) {
            card.classList.add('big');
        } else {
            card.classList.add('big');
        }
    });

    card.addEventListener('mouseleave', () => {
        cards.forEach(c => c.classList.remove('big'));
        cards[0].classList.add('big');
    });
});

cards[0].classList.add('big');



cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        selectCharacter(index); // saves character ID
        window.location.href = "char.html"; // open template
    });
});