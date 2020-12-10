$(function () {
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
  $(".heroRightSide").effect("slide", 2000);

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
