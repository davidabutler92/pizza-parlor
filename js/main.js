// Business Logic
-

function getToppings(checkboxNodes) {
  const toppings = [];
  for(let i = 0; i < checkboxNodes.length; i++) {
    const value = checkboxNodes[i].value;
    const checked = checkboxNodes[i].checked;
    if(checked) {
      toppings.push(value);
    }
  }
  return toppings;

}

Pizza.prototype.addPrice = function() {
  if (this.size === "medium") {
    this.price += 2; 
  } else  if (this.size === "large") {
    this.price += 4;
  }
  this.price += (this.pricePerTopping * this.toppings.length);
}
 

//UI logic
$(document).ready(function() {
  $("#order-now").click(event => {
    event.preventDefault();
    $("#customize-pizza-form").show();    
  });

  //Business Logic
  $("#place-order").click(event => {
    event.preventDefault();
    console.log('CLICK ME');
    const size = $("#pizza-size").val();
    const sauce = $("#pizza-sauce").val();
    const checkboxNodes = $("#checkbox-wrapper").children("input");
    const toppings = getToppings(checkboxNodes);

    const newPizza = new Pizza(size, sauce, toppings);
    newPizza.addPrice();
    console.log(newPizza.price);
  });
});





