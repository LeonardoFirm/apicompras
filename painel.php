<?php
session_start();
include('verifica_login.php');
?>

<!DOCTYPE html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>API Compras | Produtos</title>
    <link type="text/css" rel="stylesheet" media="screen" href="CSS/style.css" />
    <script type="text/javascript" src="http://code.jquery.com/jquery-1.7.2.min.js"></script>
    <script type="text/javascript" src="JS/JavaScript.js"></script>
    <link rel="shortcut icon" href="Img/log_api.ico" type="image/x-icon" />
</head>

<body>
    <h3 style="color: #323232;">Olá, <?php echo $_SESSION['usuario']; ?></h3>
    <h5><a href="logout.php" style="color: #323232">Sair</a></h5>
        <div>
        <script src="https://sheetdb.io/s/t/nl0qhtr3k733h.js"></script>
        </div>
</body>

</html>