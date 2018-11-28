console.log("Thanks for checking out my code xD");

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

document.getElementById('itd').addEventListener('click',function(){

window.open("https://www.itdcanada.ca/");

});

document.getElementById('saga').addEventListener('click',function(){

window.open("https://saga.art.br/");

});

document.getElementById('mkt').addEventListener('click',function(){

window.open("https://drummond.com.br");

});

document.getElementById('itdBtn').addEventListener('click',function(){

window.open("https://itdcanada.ca/game-programming/");

});

document.getElementById('sagaBtn').addEventListener('click',function(){

window.open("https://saga.art.br/cursos/start/");

});


document.getElementById('mktBtn').addEventListener('click',function(){

window.open("https://drummond.com.br/marketing_C31/");

});



document.getElementById('linkedinBtn').addEventListener('click',function(){

window.open("https://www.linkedin.com/in/andr%C3%A9-henrique-adura-47a69811a/");

});



document.getElementById('githubBtn').addEventListener('click',function(){

window.open("https://github.com/AndreAdura");

});