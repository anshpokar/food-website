const pizzaImages = ['images/margirita.png','images/onion_pizza.png','images/Pepperoni_pizza.png','images/Pepperoni_pizza.png','images/margirita.png','images/onion_pizza.png','images/Pepperoni_pizza.png','images/Pepperoni_pizza.png'];

const pizza_name=['Margherita Pizza','Onion','Pepperoni','Veggie','Margherita Pizza','Onion','Pepperoni','Veggie'];

const pizza_disc=['a classic italian pizza topped with fresh mozzarella and tangy tomato sause','Topped with caramelized onions, melted cheese, and a rich tomato base.','Topped with pepperoni slices,mozzarella cheese, and a flavorful tomato sauce.','A mix of vegetables such as bell peppers, onions, mushrooms, and olives.','a classic italian pizza topped with fresh mozzarella and tangy tomato sause','Topped with caramelized onions, melted cheese, and a rich tomato base.','Topped with pepperoni slices, mozzarella cheese, and a flavorful tomato sauce.','A mix of vegetables such as bell peppers, onions, mushrooms, and olives.'];

function loadPizzaCard(){
    document.querySelector('.display').innerHTML="";
    pizzaCardss="";
    for(let i=0;i<pizzaImages.length;i++){
        pizzaCard=`<div class="card">
                        <div class="image">
                            <img src="${pizzaImages[i]}" alt="">
                        </div>
                        <div class="item_name">
                            <h1>${pizza_name[i]}</h1>
                        </div>
                        <div class="item_discription">
                            <p>${pizza_disc[i]}</p>
                        </div>
                        <div class="add_to_cart_btn">
                            <button onclick="js_add_to_cart()">Add To Cart</button>
                        </div>
                    </div>`
        pizzaCardss+=pizzaCard;
    }
    document.querySelector('.display').innerHTML=pizzaCardss;
}



const burger_image=['images/burger.png','images/aloo-tikki-burger.png','images/chickenBurger.png','images/burger.png','images/aloo-tikki-burger.png','images/chickenBurger.png'];
const burger_name=['Classic Burger','Aloo Tikki Burger','Chicken Burger','Classic Burger','Aloo Tikki Burger','Chicken Burger'];
const burger_disc=['A classic burger is a juicy beef patty with fresh toppings in a soft bun.','Aloo Tikki Burger: Spiced potato patty in a bun with veggies and sauces.','A chicken burger is a bun sandwich with a chicken patty and toppings.','A classic burger is a juicy beef patty with fresh toppings in a soft bun.','Aloo Tikki Burger: Spiced potato patty in a bun with veggies and sauces.','A chicken burger is a bun sandwich with a chicken patty and toppings.'];
function loadBurgerCard(){
    document.querySelector('.display').innerHTML="";
    burgerCardss="";
    for(let i=0;i<burger_image.length;i++){
        burgerCard=`<div class="card">
                        <div class="image">
                            <img src="${burger_image[i]}" alt="">
                        </div>
                        <div class="item_name">
                            <h1>${burger_name[i]}</h1>
                        </div>
                        <div class="item_discription">
                            <p>${burger_disc[i]}</p>
                        </div>
                        <div class="add_to_cart_btn">
                            <button onclick="js_add_to_cart()">Add To Cart</button>
                        </div>
                    </div>`
        burgerCardss+=burgerCard;
    }
    document.querySelector('.display').innerHTML=burgerCardss;
}

let cartQuantity=0;
function js_add_to_cart(){
    cartQuantity++;
    quantity_display=`<img src="images/cart.png" alt=""><p>=  ${cartQuantity}</p>`
    document.querySelector('.js-cart').innerHTML=quantity_display;
}