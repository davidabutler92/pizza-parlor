// Business Logic
function Pizza (size, sauce, toppings) {
  this.size = size;
  this.sauce = sauce;
  this.toppings = toppings; 
}


//UI logic
$(document).ready(function() {
  $("#order-now").click(function(event) {
    event.preventDefault();
    $("#customize-pizza-form").show();
  });
});
