let cartBtn = document.getElementById('cartBtn');
let cartContainer = document.getElementById('cartContainer');


cartBtn.addEventListener("mouseenter", () => {
    cartContainer.style.display = 'flex'
})

cartBtn.addEventListener("mouseleave", () => {
    cartContainer.style.display = 'none'
})