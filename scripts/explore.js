// const pizzaImages = ['images/margirita.png','images/onion_pizza.png','images/Pepperoni_pizza.png','images/Pepperoni_pizza.png','images/margirita.png','images/onion_pizza.png','images/Pepperoni_pizza.png','images/Pepperoni_pizza.png'];

// const pizza_name=['Margherita Pizza','Onion','Pepperoni','Veggie','Margherita Pizza','Onion','Pepperoni','Veggie'];

// const pizza_disc=['a classic italian pizza topped with fresh mozzarella and tangy tomato sause','Topped with caramelized onions, melted cheese, and a rich tomato base.','Topped with pepperoni slices,mozzarella cheese, and a flavorful tomato sauce.','A mix of vegetables such as bell peppers, onions, mushrooms, and olives.','a classic italian pizza topped with fresh mozzarella and tangy tomato sause','Topped with caramelized onions, melted cheese, and a rich tomato base.','Topped with pepperoni slices, mozzarella cheese, and a flavorful tomato sauce.','A mix of vegetables such as bell peppers, onions, mushrooms, and olives.'];

// function loadPizzaCard(){
//     document.querySelector('.display').innerHTML="";
//     pizzaCardss="";
//     for(let i=0;i<pizzaImages.length;i++){
//         pizzaCard=`<div class="card">
//                         <div class="image">
//                             <img src="${pizza.image}" alt="">
//                         </div>
//                         <div class="item_name">
//                             <h1>${pizza_name[i]}</h1>
//                         </div>
//                         <div class="item_discription">
//                             <p>${pizza_disc[i]}</p>
//                         </div>
//                         <div class="price">
//                             <p>${price[i]}</p>
//                         </div>
//                         <div class="add_to_cart_btn">
//                             <button onclick="js_add_to_cart()">Add To Cart</button>
//                         </div>
//                     </div>`
//         pizzaCardss+=pizzaCard;
//     }
//     document.querySelector('.display').innerHTML=pizzaCardss;
// }



// const burger_image=['images/burger.png','images/aloo-tikki-burger.png','images/chickenBurger.png','images/burger.png','images/aloo-tikki-burger.png','images/chickenBurger.png'];
// const burger_name=['Classic Burger','Aloo Tikki Burger','Chicken Burger','Classic Burger','Aloo Tikki Burger','Chicken Burger'];
// const burger_disc=['A classic burger is a juicy beef patty with fresh toppings in a soft bun.','Aloo Tikki Burger: Spiced potato patty in a bun with veggies and sauces.','A chicken burger is a bun sandwich with a chicken patty and toppings.','A classic burger is a juicy beef patty with fresh toppings in a soft bun.','Aloo Tikki Burger: Spiced potato patty in a bun with veggies and sauces.','A chicken burger is a bun sandwich with a chicken patty and toppings.'];
// function loadBurgerCard(){
//     document.querySelector('.display').innerHTML="";
//     burgerCardss="";
//     for(let i=0;i<burger_image.length;i++){
        // burgerCard=`<div class="card">
        //                 <div class="image">
        //                     <img src="${burger_image[i]}" alt="">
        //                 </div>
        //                 <div class="item_name">
        //                     <h1>${burger_name[i]}</h1>
        //                 </div>
        //                 <div class="item_discription">
        //                     <p>${burger_disc[i]}</p>
        //                 </div>
        //                 <div class="add_to_cart_btn">
        //                     <button onclick="js_add_to_cart()">Add To Cart</button>
        //                 </div>
        //             </div>`
//         burgerCardss+=burgerCard;
//     }
//     document.querySelector('.display').innerHTML=burgerCardss;
// }

// let cartQuantity=0;
// function js_add_to_cart(){
//     cartQuantity++;
//     quantity_display=`<img src="images/cart.png" alt=""><div class="quantity-count">${cartQuantity}</div>`;
//     document.querySelector('.js-cart').innerHTML=quantity_display;
// }



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
                    <button class="js_add_to_cart">Add To Cart</button>
                </div>
            </div>`
    });

    document.querySelector('.display').innerHTML=productHtml;
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
                    <button class="js_add_to_cart">Add To Cart</button>
                </div>
            </div>`
    });

    document.querySelector('.display').innerHTML=productHtml;
});

let cartQuantity = 0;
document.querySelectorAll('.js_add_to_cart')
    .forEach((button)=>{
        button.addEventListener('click', () =>{
            console.log('12');
            const productName=button.dataset.productName;
            let matchingItem = dataCart.find(item => item.productName === productName);
            // dataCart.forEach((item)=>{
            //     if (productName === item.productName){
            //         matchingItem = item;
            //         cartQuantity ++;
            //     }
            // });

            if (matchingItem){
                matchingItem.quantity+=1;
            } else {
                dataCart.push({
                    productName : productName,
                    quantity : 1,
                });
                cartQuantity++;
            }
            quantityDisplay=`<img src="images/cart.png" alt=""><div class="quantity-count">${cartQuantity}</div>`;
            document.querySelector('.js-cart').innerHTML=quantityDisplay;
            console.log(cartQuantity);
            console.log(dataCart);
        });
});
