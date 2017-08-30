$(document).ready(function(){
      $('.carousel').carousel();

     $('.moviePanelClass').hide();
     $('#videoModalContainer').hide();
     $('#playOverlay').hide();

     populateCarousel();

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

      $("#carouselId").click(function() {
       $(".moviePanelClass").slideUp();
       $("#playOverlay").hide();
     });

     $(".active").mouseover(function() {
      $("#playOverlay").show();
    });

     $(".playButt").click(() => {

       var videoLinkForPlayer = $('.active')[0].getAttribute('data-prog-link');
       console.log('vidLink? : ', videoLinkForPlayer);

       $('#video-player').attr('src', 'videos/' + videoLinkForPlayer);
       
       $('#videoModalContainer').show();
      //  $('#video-player').load();



       console.log('videos/' + videoLinkForPlayer);
     });

    //  $('#videoModalContainer').on('click', function(){
    //    $('#videoModalContainer').hide();
    //  });

    $(document).keyup(function(e) {
      if (e.keyCode === 13) $('#videoModalContainer').hide();     // enter
      if (e.keyCode === 27) $('#videoModalContainer').hide();     // esc
    });


    });
