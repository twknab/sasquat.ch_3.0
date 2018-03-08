<?php 
?>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="application-name" content="The Sasquat.ch Den">
    <meta name="description" content="<?= $description ?>">
    <meta name="keywords" content="<?= $keywords ?>">
    <meta name="author" content="Nothing here but a foot print...and, say, what's that musty odor?">
    <!-- REMOVE THIS FOR PRODUCTION  -->
    <meta name="robots" content="nofollow" />
    <!-- REMOVE THE ABOVE FOR PRODUCTION  -->
    <title><?= $title ?></title>
    <link rel="icon" href="../client/images/fav.png">
    <link rel="stylesheet" href="../../client/css/styles.css">
    <link rel="stylesheet" href="../../client/css/normalize.css">
    <script src="../../client/js/jquery-3.3.1.min.js"></script>
    <script src="../../client/js/main.js"></script>
  <?php if (isset($scripts) && count($scripts) > 0) {
  foreach ($scripts as $script) { ?>
    <script src="<?= $script ?>"></script>
  <? } ?>
<? } ?>
</head>
<?php 
  echo ""; // adds new line to bottom of closing </head> tag
?>