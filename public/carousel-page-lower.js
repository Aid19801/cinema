$(document).ready(function(){
      $('.carousel').carousel();

     $('.moviePanelClass').hide();
     $('#videoModalContainer').hide();

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
     });


     $(".playButt").click(() => {

       var videoLinkForPlayer = $('.active')[0].getAttribute('data-prog-link');

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
      if (e.keyCode === 27) {
        console.log('1');
        $('#play-pause').click();
        console.log('2');
        $('#videoModalContainer').hide();
        console.log('3');
      }     // esc

    });


    });
        // Video
        var video = document.getElementById("video-player");

        // Buttons
        var playButton = document.getElementById("play-pause");
        var muteButton = document.getElementById("mute");
        var fullScreenButton = document.getElementById("full-screen");

        // Sliders
        var seekBar = document.getElementById("seek-bar");
        var volumeBar = document.getElementById("volume-bar");


      // Event listener for the play/pause button
      playButton.addEventListener("click", function() {
        if (video.paused == true) {
          // Play the video
          video.play();

          // Update the button text to 'Pause'
          playButton.innerHTML = "Pause";
        } else {
          // Pause the video
          video.pause();

          // Update the button text to 'Play'
          playButton.innerHTML = "Play";
        }
      });

      // Event listener for the mute button
      muteButton.addEventListener("click", function() {
        if (video.muted == false) {
          // Mute the video
          video.muted = true;

          // Update the button text
          muteButton.innerHTML = "Unmute";
        } else {
          // Unmute the video
          video.muted = false;

          // Update the button text
          muteButton.innerHTML = "Mute";
        }
      });

      // Event listener for the full-screen button
      fullScreenButton.addEventListener("click", function() {
        if (video.requestFullscreen) {
          video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
          video.mozRequestFullScreen(); // Firefox
        } else if (video.webkitRequestFullscreen) {
          video.webkitRequestFullscreen(); // Chrome and Safari
        }
      });

      // Event listener for the seek bar
      seekBar.addEventListener("change", function() {
        // Calculate the new time
        var time = video.duration * (seekBar.value / 100);

        // Update the video time
        video.currentTime = time;
      });

      // Update the seek bar as the video plays
      video.addEventListener("timeupdate", function() {
        // Calculate the slider value
        var value = (100 / video.duration) * video.currentTime;

        // Update the slider value
        seekBar.value = value;
      });

      // Pause the video when the slider handle is being dragged
      seekBar.addEventListener("mousedown", function() {
        video.pause();
      });

      // Play the video when the slider handle is dropped
      seekBar.addEventListener("mouseup", function() {
        video.play();
      });

      // Event listener for the volume bar
      volumeBar.addEventListener("change", function() {
        // Update the video volume
        video.volume = volumeBar.value;
      });
