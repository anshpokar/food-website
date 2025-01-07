export const dataCart=[];

 export let cartQuantity =0;

export function addTocart(productId){
    let matchingItem = dataCart.find(cartItem => cartItem.productId === productId);

            if (matchingItem){
                matchingItem.quantity+=1;
                cartQuantity++;
            } else {
                dataCart.push({
                    productId : productId,
                    quantity : 1,
                });
                cartQuantity++;
            }
            let quantityDisplay=`<img src="images/cart.png" alt=""><div class="quantity-count">${cartQuantity}</div>`;
            document.querySelector('.js-cart').innerHTML=quantityDisplay; 
}