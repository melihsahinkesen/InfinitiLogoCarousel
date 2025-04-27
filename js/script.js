$(window).load(function() {

  $("#looplogoslide").flexisel();
  $("#looplogoslide2").flexisel({
    visibleItems: 5,
    animationSpeed: 5000,
    autoPlay: true,
    autoPlaySpeed: 6000,
    pauseOnHover: true,
    enableResponsiveBreakpoints: true,
    responsiveBreakpoints: { 
      portrait: { 
        changePoint:480,
        visibleItems: 1
      }, 
      landscape: { 
        changePoint:640,
        visibleItems: 2
      },
      tablet: { 
        changePoint:768,
        visibleItems: 3
      }
    }
  });
});