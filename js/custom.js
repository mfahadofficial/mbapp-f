let cardTransitionTime = 300;
// let frontImage = ['image/cards/fronts/Card1—Front.png',
//    'image/cards/fronts/Card2—Front.png',
//    'image/cards/fronts/Card3—Front.png',
//    'image/cards/fronts/Card4—Front.png',
//    'image/cards/fronts/Card5—Front.png',
//    'image/cards/fronts/Card6—Front.png',
//    'image/cards/fronts/Card7—Front.png',
//    'image/cards/fronts/Card8—Front.png',
//    'image/cards/fronts/Card9—Front.png',
//    'image/cards/fronts/Card10—Front.png',
//    'image/cards/fronts/Card11—Front.png',
//    'image/cards/fronts/Card12—Front.png',
//    'image/cards/fronts/Card13—Front.png',
//    'image/cards/fronts/Card14—Front.png',
//    'image/cards/fronts/Card15—Front.png',
// ];
// let backImage = ['image/cards/backs/Card1—Back.png',
//    'image/cards/backs/Card2—Back.png' ,
//    'image/cards/backs/Card3—Back.png' ,
//    'image/cards/backs/Card4—Back.png' ,
//    'image/cards/backs/Card5—Back.png' ,
//    'image/cards/backs/Card6—Back.png' ,
//    'image/cards/backs/Card7—Back.png' ,
//    'image/cards/backs/Card8—Back.png' ,
//    'image/cards/backs/Card9—Back.png' ,
//    'image/cards/backs/Card10—Back.png' ,
//    'image/cards/backs/Card11—Back.png' ,
//    'image/cards/backs/Card12—Back.png' ,
//    'image/cards/backs/Card13—Back.png' ,
//    'image/cards/backs/Card14—Back.png' ,
//    'image/cards/backs/Card15—Back.png' ,
// ];

let $card = $('.js-card')
let $body = $('body')
// let $wrap = $('.card__wrapper')
let switching = false
// let count = 0;
// let flag = true;
// let countBack = 0;


// // $('#btn-start').hide();
$('#btn-question').click(flipCard)
// $('#btn-edit').click(editBoard)
$('#btn-start').click(startQue);
$('#btn-answer').click(nextQue);



// /* Flip functionality */
function flipCard () {
   if (switching) {
      return false
   }
   switching = true

   $card.toggleClass('is-switched')
   $('#btn-answer').show().addClass('slide-btn-2');
   $body.addClass('answer')
   window.setTimeout(function () {
      $card.children().children().toggleClass('is-active')
      switching = false
   }, cardTransitionTime / 2)
}



// /* Next Question functionality */

function nextQue (e) {
   flipCard();
   $(this).hide();
   $body.removeClass('answer');
   $('#btn-question').show();
}


// /* Start Quiz/Question functionality */

function startQue () {
   $(this).hide();
   $('#btn-question').show();
}


// /* Edit Button functionality */

// function editBoard () {
//    alert();
// }


// /* Swapping functionality */

$(function() {
   $(".f-image").swipe( {
     //Generic swipe handler for all directions
     swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
         flipCard();
         $('btn-start').hide();
     }
   });
   $(".f-image").swipe( {fingers:1} );
 });

 $(function() {
   $(".main-image").swipe( {
     //Generic swipe handler for all directions
     swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
         $('#btn-start').hide();
         $('#btn-question').show();
         $('.owl-carousel').trigger('next.owl.carousel');
     }
   });
   $(".f-image").swipe( {fingers:1} );
 });


$(function() {
   $(".b-image").swipe( {
     //Generic swipe handler for all directions
     swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
         flipCard();
         $body.removeClass('answer');
         $('#btn-question').hide();
         $('.owl-carousel').trigger('next.owl.carousel');

     }
   });
   $(".b-image").swipe( {fingers:1} );
 });


// /* When slider reaches to last slide functionality */

// $(function() {
//    $("#welcome").swipe( {
//      //Generic swipe handler for all directions
//      swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
//          $('.card').addClass('d-block').removeClass('d-none');
//          $('#btn-slide').hide();
//          $('#btn-question').show();
//          $('#btn-start').hide();
//          $(this).hide();
//          $wrap.css('left', '0');
//      }
//    });
//    $("#welcome").swipe( {fingers:1} );
//  });


 /* Owl Carousel */
 $('.owl-carousel').owlCarousel({
   loop:false,
   margin:10,
   nav:false,
   items:1,
})
document.querySelector('.slide-btn').addEventListener('click', function(){
   $('.owl-carousel').trigger('next.owl.carousel');
});
document.querySelector('.slide-btn-2').addEventListener('click', function(){
   $('.owl-carousel').trigger('next.owl.carousel');
});