<?php
// login.php
session_start();
$pageTitle = 'Login';
require 'inc/header.inc.php';
require 'inc/db_connect.inc.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = hash('sha512', $_POST['password']);

    // $sql = "SELECT * FROM user WHERE email='$email' AND password='$password'";
	$sql = "SELECT * FROM user WHERE email=:email AND password=:password";

	$stmt = $db->prepare($sql);
	$stmt->execute(["email" => $email,"password" => $password]);

    if ($stmt->rowCount() == 1) {
        $_SESSION['loggedin'] = 1;
        $_SESSION['email'] = $email;
        $row = $stmt->fetch();
        $_SESSION['first_name'] = $row->first_name;
        header('location: home.php');
    } else {
        echo '<p>Please try again or go away</p>';
    }
}
?>

<form action="login.php" method="POST">
    <label for="email">Email</label>
    <br><br>
    <input type="email" name="email" id="email" required>
    <br><br>
    <label for="password">Password</label>
    <span id="showPassword" onclick="showPassword()">Show Password</span>
    <br><br>
    <input type="password" name="password" id="password" required>
    <br><br>
    <input type="submit" value="Login">
</form>

<script src="js/script.js"></script>

<?php require 'inc/footer.inc.php' ?>