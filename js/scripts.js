$(document).ready(function() {
  $("form").submit(function(event) {
    var person = $("input#person").val();
    var foodType = $("select#foodType").val();
    var priceRange = $( "input:checkbox:checked" ).val();
    var happyHour = $("input:radio[name=optionsRadios]:checked").val();

    $(".name").text(person);
    $(".foodType").text(foodType);
    $(".priceRange").text(priceRange);
    $(".happyHour").text(happyHour);

    $("#surveyResults").show();


    event.preventDefault();

  });
});
