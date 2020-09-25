<nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
  <a class="navbar-brand" href="/prog3/">
    <div class="d-none d-sm-block">
      Ahora podes comprar aqui en Dulzuras Valeria
    </div>
    <div class="d-block d-sm-none">
      Dulzuras Valeria
    </div>
  </a>
  <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-target="#navbarSupportedContent" data-toggle="collapse" type="button">
    <span class="navbar-toggler-icon">
    </span>
  </button>
  <!-- Iniciar Sesion -->
  <nav class="navbar navbar-light bg-right">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!-- Carrito -->
      <a class="navbar-brand" href="/prog3/CRUD/Carrito/nuevo.php">
        <i class="fas fa-shopping-cart">
        </i>
        <span class="count">
          <?php
if (isset($_SESSION['carrito'])) {
    echo count($_SESSION['carrito']);
} else {
    echo 0;
}
?>
        </span>
      </a>
    </div>
  </nav>
  <ul class="navbar-nav mr-auto">
  </ul>
  <ul class="navbar-nav navbar-right">
    <?php if (!isset($_SESSION["iIdUsuarios"])) {?>
    <li class="nav-item active">
      <a class="nav-link" href="CRUD\Acceso\loginsession.php">
        <i class="far fa-user mr-2">
        </i>
        Iniciar Sesion
      </a>
    </li>
    <?php } else {?>
    <li class="nav-item dropdown">
      <a aria-expanded="false" aria-haspopup="true" class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id="navbarDropdown" role="button">
        <?php echo '<i class="fas fa-user-circle">
      </a>
    </li>
  </ul>
</nav>
' . $_SESSION["sLogin"]; ?>
<div aria-labelledby="navbarDropdown" class="dropdown-menu dropdown-menu-right">
  <a class="dropdown-item" href="#">
    <i class="fas fa-user">
    </i>
    Mi cuenta
  </a>
  <?php
?>
  <a class="dropdown-item" href="#">
    <i class="fas fa-file-alt">
    </i>
    Mis órdenes
  </a>
  <div class="dropdown-divider">
  </div>
  <a class="dropdown-item" href="CRUD\Acceso\logout.php">
    <i class="fas fa-sign-out-alt">
    </i>
    Cerrar Sesion
  </a>
</div>
<?php }?>
