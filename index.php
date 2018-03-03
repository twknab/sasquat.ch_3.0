<?php
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
$scripts = []; // put any scripts here
?>
<!DOCTYPE html>
<html lang="en">
  <?php include(ROOT_PATH."/server/includes/header.php") ?>
  <body>
    <!-- Wrapper  -->
    <div id="yetti-wrap">
      <!-- Logo Wrapper  -->
      <div id="logo-wrap">
        <!-- Logo  -->
        <img src="http://unsplash.it/500/500?gravity=center" alt="Sasquatch Web Development and Design, Welcome to the Den"/>
        <!-- Tree Icon -->
        <img src="http://unsplash.it/100/100?gravity=center" alt="Western Hemlock Tree"/>
      </div>
      <!-- Main Menu -->
      <div id="main-menu">
        <!-- Primary Navigation -->
        <ul>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
        <!-- Secondary Navigation  -->
        <ul>
          <li>About</li>
          <li>Policies</li>
        </ul>
      </div>
      <!-- Footer  -->
      <footer>
        <!-- Moon Icon  -->
        <img src="http://unsplash.it/100/100?gravity=center" alt="Crescent Moon Shimmering"/>
        <!-- Crafted Care Text  -->
        <p>Hand-crafted with consciousness <span id="globe">🌎</span> and care for your enjoyment.</p>
      </footer>
    </div>
  </body>
</html>