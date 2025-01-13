export let dataCart=JSON.parse(localStorage.getItem('dataCart'));

if (!dataCart){
    dataCart = [{
        productId: 'pizza_mar',
        quantity: 1
    },
    {
        productId:'burger_cla',
        quantity:2
    },{
        productId:'burger_cla',
        quantity: 7
    },{
        productId: 'pizza_mar',
        quantity: 1
    },
    {
        productId:'burger_cla',
        quantity:2
    },{
        productId:'burger_cla',
        quantity: 7
    }];
}

function saveToStorage(){
    localStorage.setItem('dataCart', JSON.stringify(dataCart));
}

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
            saveToStorage();
            let quantityDisplay=`<img src="images/cart.png" alt=""><div class="quantity-count">${cartQuantity}</div>`;
            document.querySelector('.js-cart').innerHTML=quantityDisplay; 
}


export function removeFromCart(productId){
    const newCart = [];
    
    dataCart.forEach((cartItem) =>{
        if (cartItem.productId !== productId){
            newCart.push(cartItem);
        };
    });

    dataCart = newCart;
    saveToStorage();
    // console.log(newCart)
}