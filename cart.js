let cartBtn = document.getElementById('cartBtn');
let cartContainer = document.getElementById('cartContainer');


cartBtn.addEventListener("mouseenter", () => {
    cartContainer.style.display = 'flex'
})

cartContainer.addEventListener("mouseleave", () => {
    cartContainer.style.display = 'none'
})

let items = [{
    img : 'Images/shopImg1',
    title : 'CYBERPUNK: EDGERUNNERS - MADNESS MANGA',
    price : '$8.99'
},
{
    img : 'Images/shopImg2',
    title : 'CYBERPUNK EDGERUNNERS LUCY ICE PLUNGE HOODIE',
    price : '$55.00'
},
{
    img : 'Images/shopImg3',
    title : `CYBERPUNK EDGERUNNERS DAVID'S APARTMENT SHADOWBOX`,
    price : '$43.50'
},
{
    img : 'Images/shopImg4',
    title : `CYBERPUNK EDGERUNNERS DAVID 6" FIGURE`,
    price : '$36.00'
},
]

function addToCart(itemId) {
    document.getElementById('cartMsg').style.display = 'none'
    let item = items[itemId];

    cartContainer.innerHTML += `
        <div class="cartCard">
            <img class="cCardImg" src="${item.img}.png">
            <div class="cCardText">
                <p class="cCardName">${item.title}</p>
                <p class="cCardPrice">${item.price}</p>
            </div>
            <img id="deleteBtn" src="Images/delete.svg" alt="">
        </div>
    `;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
}


function removeFromCart(itemId) {
    document.getElementById('cartMsg').style.display = 'none'
    let item = items[itemId];
}