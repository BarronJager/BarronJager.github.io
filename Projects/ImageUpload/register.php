<?php
// register.php
$pageTitle = "Register";
require 'inc/header.inc.php';
require 'inc/db_connect.inc.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $password = hash('sha512', $_POST['password']);

	$sql = "INSERT INTO user (email,first_name,last_name,password) ";
	$sql .= "VALUES (:email,:first_name,:last_name,:password)";

	$stmt = $db->prepare($sql);
	$stmt->execute(["email" => $email,"first_name" => $first_name,"last_name" => $last_name, "password" => $password]);

    if ($stmt->rowCount() == 0) {
        echo '<div>There was a problem registering your account</div>';
    } else {
        echo "<div>You are now ready to go!</div>";
        echo '<a href="login.php" title="Login Page">Login</a>';
    }
}
?>

<h1>Register</h1>
<form action="register.php" method="POST">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required>
    <br><br>
    <label for="password">Password</label>
    <input type="password" id="password" name="password" required>
    <br><br>
    <label for="first_name">First Name</label>
    <input type="text" id="first_name" name="first_name" required>
    <br><br>
    <label for="last_name">Last Name</label>
    <input type="text" id="last_name" name="last_name" required>
    <br><br>
    <input type="submit" value="Register">
</form>
<?php require 'inc/footer.inc.php' ?>