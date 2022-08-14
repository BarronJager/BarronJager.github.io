<?php
function showImages($dir) {
    if(is_dir($dir)){
        $dir_array = scandir($dir);
        foreach ($dir_array as $file) {
            if(strpos($file,'.') > 0){
                echo "<div><img src='" . $dir ."/{$file}'><br><a class='delete' href='?file=$dir".'/'."$file'>Delete</a><br></div>";
            }
        }
    }
}

function processSubmittedFile(){

                // Define these errors in an array
            $upload_errors = array(
                UPLOAD_ERR_OK 				=> "No errors.",
                UPLOAD_ERR_INI_SIZE  		=> "Larger than upload_max_filesize.",
                UPLOAD_ERR_FORM_SIZE 		=> "Larger than form MAX_FILE_SIZE.",
                UPLOAD_ERR_PARTIAL 			=> "Partial upload.",
                UPLOAD_ERR_NO_FILE 			=> "No file.",
                UPLOAD_ERR_NO_TMP_DIR 		=> "No temporary directory.",
                UPLOAD_ERR_CANT_WRITE 		=> "Can't write to disk.",
                UPLOAD_ERR_EXTENSION 		=> "File upload stopped by extension.");

    if($_SERVER['REQUEST_METHOD'] == "POST"){

        // what file do we need to move?
        $tmp_file = $_FILES['file_upload']['tmp_name'];

        // set target file name
        // basename gets just the file name
        $target_file = basename($_FILES['file_upload']['name']);

        // set upload folder name
        $upload_dir = 'uploads';
        // create upload_dir if not exist
        if (!file_exists($upload_dir)){
            mkdir($upload_dir);
        }

        // Now lets move the file
        // move_uploaded_file returns false if something went wrong
        if(move_uploaded_file($tmp_file, $upload_dir . "/" . $target_file)){
            $message = "File uploaded successfully";
        } else {
            $error = $_FILES['file_upload']['error'];
            $message = $upload_errors[$error];
        } // end of if
        return $message;
    } // end of if
}

function displayedErrorMessage($message){
    if(!empty($message)) {
        echo "<p>{$message}</p>";
    }
}

function deleteImage(){
    if(isset($_GET["file"])){
        if(file_exists($_GET["file"])){
            unlink( $_GET['file']);
        }
    }
}