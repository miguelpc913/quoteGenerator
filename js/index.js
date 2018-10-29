const gradients = ['linear-gradient(to right, #ff4e50, #f9d423)', 
				   'linear-gradient(to right, #add100, #7b920a)',
				   'linear-gradient(to right, #fbd3e9, #bb377d)',
				   'linear-gradient(to right, #606c88, #3f4c6b)',
				   'linear-gradient(to right, #649173, #dbd5a4)',
				   'linear-gradient(to right, #e6dada, #274046)',
				   'linear-gradient(to right, #f0c27b, #4b1248)',
				   'linear-gradient(to right, #333333, #dd1818)']


$(document).ready(function(){
let randomVar
getQuote();

  
  //getting the quote and author
function getQuote(){
$.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(data){
  randomVar = data.quoteText; 
    $(".quote").hide().fadeIn(1000).html('"' + data.quoteText +'"');
    $(".author").hide().fadeIn(1000).html("- " + data.quoteAuthor); 
randomVar = data.quoteText;  
document.querySelector("body").style.background = gradients[Math.floor(Math.random()*8)];
});
}

//twitter button  
$('#tweet').on("click",function(){
window.open("https://twitter.com/intent/tweet?text=" + randomVar);
});
  //new-quote button
$("#next-quote").on("click",function(){
getQuote();
});
});
