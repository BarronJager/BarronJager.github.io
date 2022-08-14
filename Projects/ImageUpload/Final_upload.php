<?php require "inc/function.inc.php" ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Image Gallery</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
	<h1>Image Gallery</h1>
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
</html>