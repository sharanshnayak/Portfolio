
$( document ).ready(function() {
   
    $('.nav-item').click(function(){
      $('.navbar .offcanvas').removeClass('show');
 });  
 

  }); 
  var loader=document.getElementById("preloader");
 
var delayInMilliseconds = 3500; //3 second

setTimeout(function load() {
  loader.style.display="none";
}, delayInMilliseconds);
