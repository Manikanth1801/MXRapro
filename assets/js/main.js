$(function(){
    // alert();
    $('.heroRightSide').effect( "slide", 2000 );








    new WOW().init();

    wow = new WOW(
      {
      boxClass:     'who-we-are',      // default
      animateClass: '', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
    })

   
  
    // $(window).scroll(function() {    
    //   var scroll = $(window).scrollTop();
    //    console.log('?????',scroll);
    
    //   if (scroll > 2356) {
    //       //  alert();
    //       console.log('a');
    //       $('.OurServiceCard').addClass('animate__animated animate__fadeInUp d-block')
    //       // $(".header").addClass("change");
    //   } else {
    //       console.log('a');
    //       $('.OurServiceCard').removeClass('animate__animated animate__fadeInUp d-none')
    //       // $(".header").removeClass("change");
    //   }
    //   });




  })



function toggleClass(){
  // alert();
  if("input:radio:checked"){
    $('.card').toggleClass('is-flipped');
  }

  // $("input:radio:checked").next('label').addClass("is-flipped");
  console.log('????', this);


}





  var rellax = new Rellax('.rellax');


  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
  
   


 
