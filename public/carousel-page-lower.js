$(document).ready(function(){
      $('.carousel').carousel();

     $('.moviePanelClass').hide();

/*       $( "#show-info-panel" ).mouseover(function() {
        $('.moviePanelClass').show();
        $( "#moviePanel" ).animate({
          height: "350px"
        }, 600, function() {

        });
      });

      $( "#show-info-panel" ).mouseout(function() {
        $( "#moviePanel" ).animate({
          height: "0px"
        }, 200, function() {
            $('.moviePanelClass').hide();
        });
      });
      */

      $( "#show-info-panel" ).click(function() {
        $( ".moviePanelClass" ).slideToggle( "slow" );
        getFocusedInfo();
      });

      // $("#carouselId").click(function() {
      //   $(".moviePanelClass").slideUp();
      // });

    });
