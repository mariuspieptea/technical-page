var $content = $('.menu-content');

function showContent(selector) {
  $content.hide();
  $(selector).show();
}

$('.menu').on('click', '.menu-btn', function(e) {
  showContent(e.currentTarget.hash);
  e.preventDefault();
}); 

// show '#about' content only on page load (if you want)
showContent('#about');