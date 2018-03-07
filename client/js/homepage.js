$(document).ready(function () {
  let hasVisited = $( "#has-visited" ).attr("data-has-visited");
  // Only show welcome message the first 2 times the user visits the page
  if (hasVisited < 3) {
    // Wait 1 second, then slowly show message:
    setTimeout(function () {
      if ($("#wilkommen").is(":hidden ")) {
        // Slide down welcome message:
        $("#wilkommen").slideDown(1000);
        // Wait 3 seconds:
        setTimeout(function () {
          // Slide up message:
          $("#wilkommen").slideUp(1000);
        }, 3000); // end slide up timer
      }
    }, 800); // end show message timer
  } // end if visited

  // Fade-in navigation:
  $( "#yetti-wrap" ).hide();
  $( "#yetti-wrap" ).fadeIn(1500);

  // Get sound elements at top of page:
  let soundPrimary = $( "#audioMain"  )[0],
    soundSecondary = $( "#audioSecondary" )[0],
    soundLogo = $( "#audioLogo" )[0];

  // On main menu primary hover, make sound:
  $( "#main-menu > ul:first-child > li" ).hover(
    function () {
      soundPrimary.play();
    }, function () {
      // stuff to do off hover
      soundPrimary.pause();
    }
  );

  // On main menu secondary hover, make sound:
  $( "#main-menu > ul:last-child > li" ).hover(
    function () {
      soundSecondary.play();
    }, function () {
      // stuff to do off hover
      soundSecondary.pause();
    }
  );
  // On logo hover, make sound:
  $( "#logo-wrap > img:first-child" ).hover(
    function () {
      soundLogo.play();
    }, function () {
      // stuff to do off hover
      // soundLogo.pause();
    }
  );

  // On "Services" click:
  $( "#services" ).click(function () {
    $( "#yetti-wrap"  ).slideUp(500, function() {
      // do stuff after slide up here
      // AKA, AJAX
      // $( "#yetti-wrap"  ).slideDown(500);
    });
  });
  // On "Works" click:
  $( "#works" ).click(function () {
    $( "#yetti-wrap"  ).slideUp(500, function() {
      // do stuff after slide up here
      // AKA, AJAX
      // $( "#yetti-wrap"  ).slideDown(500);
    });
  });
  // On "Connect" click:
  $( "#connect" ).click(function () {
    $( "#yetti-wrap"  ).slideUp(500, function() {
      // do stuff after slide up here
      // AKA, AJAX
      // $( "#yetti-wrap"  ).slideDown(500);
    });
  });
  // On "About" click:
  $( ".about" ).click(function () {
    $( "#yetti-wrap"  ).slideUp(500, function() {
      // do stuff after slide up here
      // AKA, AJAX
      // $( "#yetti-wrap"  ).slideDown(500);
    });
  });
  // On "Policies" click:
  $( ".policies" ).click(function () {
    $( "#yetti-wrap"  ).slideUp(500, function() {
      // do stuff after slide up here
      // AKA, AJAX
      // $( "#yetti-wrap"  ).slideDown(500);
    });
  });


  // create string literal for ascii art:
  let logo = `                           ,╦╦,                                                
                          ╔▒▒▒▒▒▒╕  ,╦▒▒▒▒▒Φ    ,,,                             
                         ▒░░░░░░▒▒ ╔▒░░░░░▒▒∩ ≡▒░░▒▒╕    ,,╔                    
                        ▒▒░░░░░░░▒╦▒░░░░░░▒▒ ▒░░░░░╠░  =▒░╦╦░╙╦                 
                        ╙▒▒▒▒▒▒░▒▒║▒▒▒▒▒▒▒  ╔▒░░░░░∩ ╔░≡░░░░▒▒                  
                          ╙╙"  ╚"  ╚▒▒▒╩    ▒▒▒▒▒▒   ,▒░░░░░░▒    ,╔╦╦╦         
                        ,╔,                   ""     ▒▒░░░░░░ ░≡╔▒░░░░▒▒▒ ╔     
                   ╔▒▒▒▒▒▒▒▒▒▒▒░░▒          ╦,    =  ╚▒▒▒▒┘ ╔▒░░░░░░░░░░╠▒╚░    
                ╓╗▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒,╔╔ "╚#╦          ╦▒▒░░░░░░░░░░▒╔░    
              ╔▒▒▒▒▒▒▒░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒╦┐  "░       ▒▒░░░░░░░░░░▒░▒     
             #▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒,"░╕    ▒▒░░░░░░░░▒░≡∩      
            ▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒, ╚╦   ╙╩▒▒▒▒▒░░▒"        
           ║▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒╦┐▒     ,╔Θ╙           
          ≡▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒░   ╔╙               
        ╔∩ ▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒  ▒                 
      ,╩ ╔▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒.▒                  
     ╔▒ ▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒░░                   
    ╔▒ ╒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒╠                    
   ,▒∩,╔▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒░░                     
   ╚  ▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒░░                       
    ╔╦▒▒▒░▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒"╔╩                         
,▒ ╔▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒ ▒∩                           
▒ ║▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░▒░░░░░░░░░▒▒▒▒▒▒▒▒▒ ╔▒                             
 ╔▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒╙ -╩                               
▒▒▒▒▒░░░░░░░░░░░░░░░░╠░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒╙ ╔░                                  
▒▒▒▒░░░░░░░░░░░░░░░░░░░░▒░▒▒▒▒▒▒▒▒▒▒▒▒▒╙ ,╩                                     
▒▒░▒░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒╙╔ê"                                       
░▒░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒░╔╩                                          
░░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒▒ ≡∩                                            
░░░░░░░░░░░░░░░░░░░░░░░▒▒▒▒▒▒▒▒ ╤∩
  _____ ____  _____ ___  __ __  ____ ______   __ __ __ 
 / ___//    |/ ___//   \\|  |  |/    |      | /  |  |  |
(   \\_|  o  (   \\_|     |  |  |  o  |      |/  /|  |  |
 \\__  |     |\\__  |  Q  |  |  |     |_|  |_/  / |  _  |
 /  \\ |  _  |/  \\ |     |  :  |  _  | |  |/   \\_|  |  |
 \\    |  |  |\\    |     |     |  |  | |  |\\     |  |  |
  \\___|__|__| \\___|\\__,_|\\__,_|__|__| |__| \\____|__|__|

You found a sasquatch footprint!...if you're here either something didn't work as you expected (sorry 'bout that 😖) ..OR..you're a developer 👽. I'm always looking for interesting opportunities, and if you've got anything interesting to discuss, feel free to drop me a line using my website's contact form :) Until then...keep hunting for sasquatch clues...wait, did you hear that? Was that the sound of a wood knock?
`;

                       
console.log(logo);
});


 

 