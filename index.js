var cart = [];

function getCart() {
return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  
  var price = Math.floor(Math.random()*100) +1;
  var itemAndPrice = { [item]: price}
  
cart.push(itemAndPrice);
console.log(`${item} has been added to your cart.`)

return cart;
 }


addToCart('apples')
addToCart('bananas')
addToCart('daikon')

function viewCart() {
  var listOfItems = [];
  if (cart.length === 0) {
    return 'Your shopping Cart is empty.'
}


for (let i = 0; i < cart.length; i++ ) 
{
    var cartList = cart[i];
    var key = Object.keys(cartList)[0];
    var price = cartList[key];
    listOfItems.push(`${key} at $${price}`) 
  }
  
  if (cart.length === 1) {return `In your cart, you have ${listOfItems}.` }
  else if (cart.lenght === 2 ) { return 'In your cart, you have ${listOfItems[0]} and ${listOfItems[1]}.' 
} else  {
  return  `In your cart, you have ${listOfItems.slice(0,-1).join(', ')}, and ${listOfItems[listOfItems.length-1]}.`
}
}

//review later 
function total() {
  var totCharge= 0;
  for (var i = 0; i < cart.length; i++) {
    var cartList = cart[i];
    var key = Object.keys(cartList)[0];
    var price = object[key];
    sum += price;
}
return sum;

}

total()

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    var cartList = cart[i];
    var key = Object.keys(cartList)[0];
    if (cartList.property(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
}
removeFromCart('bananas')



function placeOrder(cardNumber) {
  // write your code here
}

