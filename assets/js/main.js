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

   


    $("input[name='customRadio']").click(function() {
      if ($("#customRadioInline2").is(":checked")) {
        $("#test").addClass('d-block')
      } 
      if ($("#customRadioInline1").is(":checked")) {
        $("#test").removeClass('d-block')
      }
      else {
        $("#test").hide();
      }
    });
  

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
  
   


 
