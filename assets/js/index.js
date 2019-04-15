// Scroll function courtesy of Scott Dowding; http://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling
// $(document).ready(function() {
//   // Check if element is scrolled into view
//   function isScrolledIntoView(elem) {
//     var docViewTop = $(window).scrollTop();
//     var docViewBottom = docViewTop + $(window
// ).height();

//     var elemTop = $(elem).offset().top;
//     var elemBottom = elemTop + $(elem).height();

//     return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
//   }
//   // If element is scrolled into view, fade it in
//   $(window).scroll(function() {
//     $('.scroll-animations 
//     .animated').each(function() {
//       if (isScrolledIntoView(this) === true) {
//         $(this).addClass('fadeInRight');
//       }
//     });
    
//   });
// });


function toggle() {
  var button = document.querySelector('.toggle');
  var overlay = document.querySelector('.glass');
  if (overlay.className === 'glass down') {
    overlay.className = 'glass up';
    button.innerText = '-';
  } else {
    overlay.className = 'glass down';
    button.innerText = '+';
  }
}