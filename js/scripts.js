
var Pizza = {
  numSlices: 0,
  inches: function(diameter) {
    this.numSlices = this.numSlices + diameter;
  },
  topping: function(diameter) {
    this.numSlices = this.numSlices + (diameter + 5);
  }
};

$(document).ready(function() {
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#new-name").val();
    var pizzaOrder = parseFloat($("input#pizza-order").val());
    var newPizza = Object.create(Pizza);
    newPizza.name = inputtedName;
    newPizza.inches(pizzaOrder);

    $("input#new-name").val("");
    $("input#pizza-order").val("");



    $("#box2").show();
    $("#order").show();
    $(".name").text(newPizza.name);
    $(".balance").text(newPizza.numSlices.toFixed(2));

    $("form#topping-choice").submit(function(event) {
      event.preventDefault();

      // var inputtedinches = $("input#inches-size").val().length ? parseInt($("input#inches-size").val()) : 0;
      // var inputtedTopping = $("input#topping-choice").val().length ? parseFloat($("input#topping-choice").val()) : 0;

      newPizza.inches(pizzaOrder);
      // newPizza.topping(inputtedTopping);

      $("input#inches-size").val("");
      $("input#topping-choice").val("");

      $(".numSlices").text(newPizza.numSlices);
    });
  });
});
