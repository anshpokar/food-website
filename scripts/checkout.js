import { dataCart } from "./data/dataCart.js";
import { pizza,burger } from "./data/dataProducts.js";

let cartSummaryHTML='';

dataCart.forEach((cartItem) =>{
    const productId = cartItem.productId;

    let matchingProduct;

    pizza.forEach((product)=> {
        if (product.id === productId) {
            matchingProduct =   product;
        }
    });

    burger.forEach((product)=> {
        if (product.id === productId) {
            matchingProduct = product;
        }
    });

    cartSummaryHTML += `
    <div class="cart-item-container">
        <div class="cart-item-details-grid">
            <div class="cart-item-img">
                <img class="product-image"
            src="${matchingProduct.image}">
            </div>
            <div class="cart-item-details">
                <div class="product-name">
                    ${matchingProduct.name}
                </div>
                <div class="product-price">
                    ₹${matchingProduct.price}
                </div>
                <div class="product-quantity">
                    <span>
                    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                    </span>
                    <button class="update-quantity link-primary">
                    Update
                    </button>
                    <button class="delete-quantity link-primary">
                    Delete
                    </button>
                </div>
            </div>
        </div>
    </div>
    `;
});

document.querySelector('.js-order-summary').innerHTML= cartSummaryHTML;



