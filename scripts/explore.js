import { dataCart,cartQuantity,addTocart,saveToStorage } from "./data/dataCart.js";
import { pizza,burger } from "./data/dataProducts.js";
// import { updateCartQuantity } from "./checkout.js";

displayCartQuantityOnCart(cartQuantity);

function displayCartQuantityOnCart(cartQuantity){
    // updateCartQuantity();
}


document.querySelector(".js-pizzaBtn").addEventListener('click', () => {
    let productHtml= ``;

    pizza.forEach((product) => {
        productHtml += `
            <div class="card">
                <div class="image">
                    <img src="${product.image}" alt="">
                </div>
                <div class="item_name">
                    <h1>${product.name}</h1>
                </div>
                <div class="item_discription">
                    <p>${product.disc}</p>
                </div>
                <div class="price">
                    <p>Rs.${product.price}</p>
                </div>
                <div class="add_to_cart_btn">
                    <button class=" add_to_cart js_add_to_cart" data-product-id="${product.id}">Add To Cart</button>
                </div>
            </div>`
    });

    document.querySelector('.display').innerHTML=productHtml;

    document.querySelectorAll('.js_add_to_cart')
    .forEach((button)=>{
        button.addEventListener('click', () =>{
            const productId=button.dataset.productId;  

            addTocart(productId);
        });
    });
});



document.querySelector(".js-BurgerBtn").addEventListener('click', () => {
    let productHtml= ``;

    burger.forEach((product) => {
        productHtml += `
            <div class="card">
                <div class="image">
                    <img src="${product.image}" alt="">
                </div>
                <div class="item_name">
                    <h1>${product.name}</h1>
                </div>
                <div class="item_discription">
                    <p>${product.disc}</p>
                </div>
                <div class="price">
                    <p>Rs.${product.price}</p>
                </div>
                <div class="add_to_cart_btn">
                    <button class="add_to_cart js_add_to_cart" data-product-id="${product.id}">Add To Cart</button>
                </div>
            </div>`
    });

    
    document.querySelector('.display').innerHTML=productHtml;

    document.querySelectorAll('.js_add_to_cart')
    .forEach((button)=>{
        button.addEventListener('click', () =>{
            const productId=button.dataset.productId;

            addTocart(productId);
        });
    });
});

// document.querySelector('.js-cart').innerHTML=