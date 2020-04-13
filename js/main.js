// Business Logic
const Pizza = function(size, sauce, toppings) {
  this.size = size;
  this.sauce = sauce;
  this.toppings = toppings; 
  this.price = 8;
}

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
  if (this.size === "small") {
    return this.price;
  }
  }
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
    console.log(newPizza);
      // addPrice();

  });
});


