<!DOCTYPE html>
<html lang="en">
  <head>
    <title>
      W3.CSS Template
    </title>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1" name="viewport"/>
    <link href="https://www.w3schools.com/w3css/4/w3.css" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet"/>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
    <link href="css/colors.css" rel="stylesheet" type="text/css"/>
    <link href="css/css.css" rel="stylesheet"/>
    <style>
      html,body,h1,h2,h3,h4,h5 {font-family: "Raleway", sans-serif}
    </style>
  </head>
  <body class="w3-light-grey">
    <!-- Top container -->
    <div class="w3-bar w3-top w3-black w3-large" style="z-index:4">
      <button class="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey" onclick="w3_open();">
        <i class="fa fa-bars">
        </i>
        Menu
      </button>
      <span class="w3-bar-item w3-right">
        Banco online
      </span>
    </div>
    <?php include_once "comp/nav.html";?>
    <div class="w3-main" style="margin-left:300px;margin-top:43px;">
      <?php include_once "comp/header.html";?>
      <?php include_once 'comp/menu_interno.html';?>
      <?php include_once 'seccion/registros.php';?>
      <?php include_once "comp/chat.html";?>
    </div>
    <?php include_once 'comp/sript.html';?>
  </body>
</html>
