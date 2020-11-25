$(function(){
    // alert();
    $('.heroRightSide').effect( "slide", 2000 );


    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });


//    $("").click(function(){
//         $("p").toggleClass("main");
//       });
    


  })



function toggleClass(){
    $('.card').toggleClass('is-flipped');

}




//   var card = document.querySelector('.card');
//   card.addEventListener( 'click', function() {
//     card.classList.toggle('is-flipped');
//   });



  var rellax = new Rellax('.rellax');