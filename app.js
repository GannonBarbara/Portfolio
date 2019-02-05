"use strict"

$(document).ready(function(){
  var x = window.matchMedia("(max-width: 400px)")
  hamburgerFunction(x)
  function hamburgerFunction(x) {
    if (x.matches){
      $(".navLinks").before("<button id='navButton'>Menu</button>").hide(".navLinks")
      var clicks = 0;
        $("#navButton").click(function(){
          if(clicks == 0){
          $(".navLinks, #navButton").show();
          clicks++;  
          }else{
          $(".navLinks").hide(".navLinks");
          $("#navButton").show();
          clicks--; 
          
          
      }
    
      });
    }
  }  
  
});