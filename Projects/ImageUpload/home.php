<?php
// home.php
session_start();
$pageTitle = 'Home';
require 'inc/header.inc.php';
require "inc/function.inc.php"
?>

<a href="register.php">Register</a>
<?php 
    if(isset($_SESSION['loggedin'])){
        echo '<a href="logout.php" id="logout">Logout</a>&nbsp;';
    } else {
        echo '<a href="login.php" id="login">Login</a>&nbsp;';
    }
?>

<h1>Welcome to Image Gallery <?= isset($_SESSION['first_name']) ? $_SESSION['first_name']."</h1>" : '</h1><h2>Please register and login to view and upload to your gallery<h2>' ?>
<?php
if(!isset($_SESSION['loggedin'])){
    die();
}
?>
<body>
	<h2>Free Gallery Creator</h2>

	<?php 
        //check to see if file was uploaded
        $message = processSubmittedFile();
        //checks the error message for the file uploads
        displayedErrorMessage($message);
        // Delete  the file if the url contains ?file=
        deleteImage();

        require "inc/form.inc.html";

	?>
    <div class="container">
    <?php 
        showImages('uploads');
    ?>

    </div>

</body>

<div id="message"></div>
<script defer src="js/script.js"></script>

<?php require 'inc/footer.inc.php' ?>