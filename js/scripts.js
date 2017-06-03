$(document).ready(function(){
  $( ".cross" ).hide();
  $( ".menu" ).hide();
  $( ".hamburger" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
      $( ".hamburger" ).hide();
      $( ".cross" ).show();
    });
  });

  $( ".cross" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
      $( ".cross" ).hide();
      $( ".hamburger" ).show();
    });
  });

  $("#p2text").hide();
  $("#p3text").hide();
  $("#h2text").hide();
  $("#h3text").hide();

  $("#p1").click(function(){
    $("p#p1text").fadeIn();
    $("h4#h1text").fadeIn();
    $("#p2text").hide();
    $("#p3text").hide();
    $("#h2text").hide();
    $("#h3text").hide();
  });




  $("#p2").click(function(){
    $("p#p2text").fadeIn();
    $("h4#h2text").fadeIn();
    $("#p1text").hide();
    $("#p3text").hide();
    $("#h1text").hide();
    $("#h3text").hide();
  });

  $("#p3").click(function(){
    $("p#p3text").fadeIn();
    $("h4#h3text").fadeIn();
    $("#p2text").hide();
    $("#p1text").hide();
    $("#h2text").hide();
    $("#h1text").hide();

  });


  
})
