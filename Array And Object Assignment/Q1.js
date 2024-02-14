"use strict";
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
if (!shoppingCart.includes("Meat")) {
  shoppingCart.unshift("Meat");
}
if (!shoppingCart.includes("Sugar")) {
  shoppingCart.push("Sugar");
}
let allergic = true;
if (allergic) {
  shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
}
shoppingCart.splice(shoppingCart.indexOf("Tea"), 1, "Green Tea");
console.log(shoppingCart);
