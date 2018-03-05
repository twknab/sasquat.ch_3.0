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
$title = "Web Design and Development | Sasquat.ch";
// Keywords (as string with keywords separated by commas):
$keywords = "Web Design, Web Development, Web Application Design, Web Application Development";
// Description:
$description = "Web development and design; helping you reach your web application and website goals.";
// Any scripts go here (must be full paths)
$scripts = ["../client/js/homepage.js",]; // put any scripts here
?>
<!DOCTYPE html>
<html lang="en">
  <?php include(ROOT_PATH."/server/includes/header.php") ?>
  <body>
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
        <img src="../client/images/logo.png" alt="Sasquatch Web Development and Design, Welcome to the Den"/>
        <!-- Tree Icon -->
        <!-- <img src="../client/images/redwood.png" alt="Redwood Tree"/> -->
      </div>
      <!-- Main Menu -->
      <div id="main-menu">
        <!-- Primary Navigation -->
        <ul>
          <li>Services</li>
          <li>Works</li>
          <li>Connect</li>
          <li class="mobile-only">About</li>
          <li class="mobile-only">Policies</li>
        </ul>
        <!-- Secondary Navigation  -->
        <ul>
          <li class="shake">About</li>
          <li class="shake">Policies</li>
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