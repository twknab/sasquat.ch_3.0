<?php
session_start(); // start session
// Check if user has visited before to determine if to show welcome message:
if (!isset($_SESSION["has_visited"])) {
  $_SESSION["has_visited"] =  0;
} else {
  $_SESSION["has_visited"] += 1;
}
// Gets local root foler:
$path = realpath(dirname(__FILE__));
define("ROOT_PATH", $path);
// Page title:
$title = "Professional Website Design and Development | Sasquat.ch";
// Keywords (as string with keywords separated by commas):
$keywords = "Web Design, Web Development, Web Applications, Professional Web Services, Full Stack Developer";
// Description:
$description = "Web development and design; helping you reach your web application and website goals.";
// Any scripts go here (must be full paths)
$scripts = ["../client/js/homepage.js",]; // put any scripts here
?>
<!DOCTYPE html>
<html lang="en">
  <?php include(ROOT_PATH."/server/includes/header.php") ?>
  <body>
  <audio id="audioMain">
    <source src="../client/audio/ding.mp3"></source>
    <source src="../client/audio/ding.ogg"></source>
  </audio>
  <audio id="audioSecondary">
    <source src="../client/audio/ting.mp3"></source>
    <source src="../client/audio/ting.ogg"></source>
  </audio>
  <audio id="audioLogo">
    <source src="../client/audio/growl.mp3"></source>
    <source src="../client/audio/growl.ogg"></source>
  </audio>
    <data id="has-visited" data-has-visited="<?php 
      if (isset($_SESSION["has_visited"])) { 
        echo $_SESSION["has_visited"];  
      }?>"></data>
    <div id="wilkommen">
      <p><span class="coolify">Welcome!</span> Have a look around <span class="emoji-adjust">👀</span>  and enjoy your stay!</p>
    </div>
    <!-- Wrapper  -->
    <div id="yetti-wrap">
      <!-- Logo Wrapper  -->
      <div id="logo-wrap">
        <!-- Logo  -->
        <img src="../client/images/logo.png" class="zoom-tilt" alt="Sasquatch Web Development and Design, Professional Web Services"/>
        <!-- Tree Icon -->
        <!-- <img src="../client/images/redwood.png" alt="Redwood Tree"/> -->
      </div>
      <!-- Main Menu -->
      <div id="main-menu">
        <!-- Primary Navigation -->
        <ul>
          <li id="services">Services</li>
          <li id="works">Works</li>
          <li id="connect">Connect</li>
          <li class="about mobile-only">About</li>
          <li class="policies mobile-only">Policies</li>
        </ul>
        <!-- Secondary Navigation  -->
        <ul>
          <li class="about">About</li>
          <li class="policies">Policies</li>
        </ul>
      </div>
      <!-- Footer  -->
      <footer>
        <div id="moon">
        <!-- Moon Icon  -->
          <img src="../client/images/moon.png" alt="Crescent Moon Shimmering"/>
        </div>
        <!-- Crafted Care Text  -->
        <p>Hand-crafted with consciousness <span id="globe">🌎</span> and care for your viewing pleasure.</p>
      </footer>
    </div>
  </body>
</html>