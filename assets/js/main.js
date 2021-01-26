$(function () {
  window.scroll(0, 0);

  var a = 0;
  $(window).scroll(function () {
    // alert();
    var oTop = $("#counter").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $(".counter-value").each(function () {
        var $this = $(this),
          countTo = $this.attr("data-count");
        $({
          countNum: $this.text(),
        }).animate(
          {
            countNum: countTo,
          },

          {
            duration: 4000,
            easing: "swing",
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
              //alert('finished');
            },
          }
        );
      });
      a = 1;
    }
  });

  // alert();
  $(".aboutCompanyRightSide").effect("slide", 2000);

  new WOW().init();

  wow = new WOW({
    boxClass: "who-we-are", // default
    animateClass: "", // default
    offset: 0, // default
    mobile: true, // default
    live: true, // default
  });

  $("input[name='customRadio']").click(function () {
    if ($("#customRadioInline2").is(":checked")) {
      $("#test").addClass("d-block");
    }
    if ($("#customRadioInline1").is(":checked")) {
      $("#test").removeClass("d-block");
    } else {
      $("#test").hide();
    }
  });

  // accrdian function

  $(".custCard .card-header").each(function () {
    console.log("?????", $this);
    // and test its normalized href against the url pathname regexp
    // if(urlRegExp.test(this.href.replace(/\/$/,''))){
    //     $(this).addClass('active');
    // }
  });

  // $(".custCard .card-header").on("click", () => {

  // });
});

function toggleClass() {
  // alert();
  if ("input:radio:checked") {
    $(".card").toggleClass("is-flipped");
  }

  // $("input:radio:checked").next('label').addClass("is-flipped");
  console.log("????", this);
}

var rellax = new Rellax(".rellax");



// function validateName() {
//   var name = document.getElementById('name').value;
//   if(name.length == 0) {
//     alert("Name can't be blank") ;
//     return false;

//   }
//   if(!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
//     alert("Please enter your correct name") ;//Validation Message
//     return false;
//   }
//   return true;
// }

// function validatePhone() {
//   console.log("inside validate")
//   var phone = document.getElementById('phone').value;
//   if(phone.length == 0) {
//     alert("Phone number can't be blank") ;//Validation Message
//     return false;
//   }

//   if(!phone.match(/^[0]?[789]\d{9}$/)) {
//    alert("Please enter a correct phone number") ;//Validation Message
//    return false;
//  }

//  return true;

// }

// function validateEmail () {

// var email = document.getElementById('email').value;
// if(email.length == 0) {
//   alert("Email can't be blank") ;//Validation Message
//   return false;

// }

// if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
//   alert("Please enter a correct email address") ;//Validation Message
//   return false;

// }

// return true;

// }


// function validateForm() {
// if (!validateName() || !validatePhone() || !validateEmail()) {

//   alert("Form not submitted");//Validation Message
//   return false;
// }
// else {
//   submitted=true;
//   return true;
// }
// }
