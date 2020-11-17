$(document).ready(function() {
console.log('loaded')
$(".animate__animated").on('click', function(event) {
  $(this).toggleClass("animate__bounce");
  console.log("clicked");
})



});
