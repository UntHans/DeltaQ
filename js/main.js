$(document).ready(function(){

    //Init ScrollMagic
    var controller = new ScrollMagic.Controller();

  //
    // pin imgLogos
    // var pinNavBar = new ScrollMagic.Scene({
    //   triggerElement: '.navPin',
    //   offset: 462.4
    // })
    // .setPin('.topnav')
    // .addTo(controller);

    // scroll smoothly to section
    //
    // var scrollHome = new ScrollMagic.Scene({
    //   triggerElement: ".cnr-img",
    //   duration: 200,
    //   triggerHook: "onLeave"
    // });

    controller.scrollTo(function(newpos){
      TweenMax.to(window, 1, {scrollTo: {y: newpos}, ease:Power4.easeOut});
    });

    //binf scroll to anchor
    $(document).on("click", "a[href^=#]", function(e){
      var id = $(this).attr("href");
      if ($(id).length > 0){
        e.preventDefault();
        //trigger scroll
        controller.scrollTo(id);
        //if supported by browser upodate
      }
    })


    //Build a scene

    var ourScene1 = new ScrollMagic.Scene({
      triggerElement: ".post1",
      reverse: true
    })
    .setClassToggle("#bgiabout", 'post1read') // add class to block
    .addTo(controller);

    // var ourScene2 = new ScrollMagic.Scene({
    //   triggerElement: ".post1"
    // })
    // .addIndicators()
    // .setClassToggle("#homebg", 'postgrey') // add class to block
    // .addTo(controller);

    var ourScene3 = new ScrollMagic.Scene({
      triggerElement: '.logoPin',
      offset: -400
    })
    .setClassToggle(".slogan", 'sloganfade')
    .addTo(controller);

    var ourScene4 = new ScrollMagic.Scene({
      triggerElement: '.socail-media',
      offset: -350
    })
    .addIndicators({name: "Fade out"})
    .setClassToggle("#bgiabout", 'fade-out-dark')
    .addTo(controller);

    var images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];
    $('html').css({'background-image': 'url(images/' + images[Math.floor(Math.random() * images.length)] + ')'});

});

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 5000); // Change image every 2 seconds
}
