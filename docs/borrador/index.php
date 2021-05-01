<?php include 'validacion.php';?>
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <title>
      Document
    </title>
    <link href="css.css" rel="stylesheet" type="text/css"/>
  </head>
  <body>
    <h2>
      PHP Form Validation Example Modificado
    </h2>
    <p>
      <span class="error">
        * required field
      </span>
    </p>
    <form action="<?=$urlform?>" method="post">
      Name:
      <input name="name" type="text" value="<?=$name?>"/>
      <span class="error">
        *
        <?php echo $nameErr; ?>
      </span>
      <br/>
      <br/>
      E-mail:
      <input name="email" type="text" value="<?=$email?>"/>
      <span class="error">
        *
        <?php echo $emailErr; ?>
      </span>
      <br/>
      <br/>
      Website:
      <input name="website" type="text" value="<?=$website?>"/>
      <span class="error">
        *
        <?php echo $websiteErr; ?>
      </span>
      <br/>
      <br/>
      Comment:
      <textarea cols="40" name="comment" rows="5">
        <?=$comment?>
      </textarea>
      <br/>
      <br/>
      <?php include "inputgenero.php"?>
      <br/>
      <br/>
      <input name="submit" type="submit" value="Submit"/>
    </form>
    <?php include "pie.php";?>
  </body>
</html>