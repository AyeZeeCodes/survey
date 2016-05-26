$(document).ready(function() {
  $("form").submit(function() {
    var nameInput = $("input#name").val();
    var foodType = $("input#foodType").val();
    var priceRange = $("input#priceRange").val();
    var distance = $("input#distance").val();
    var happyHour = $("input#happyHour").val();

    (".name").text(nameInput);
    (".foodType").text(foodType);
    (".priceRange").text(priceRange);
    (".distance").text(distance);
    (".happyHour").text(happyHour);
});
});
