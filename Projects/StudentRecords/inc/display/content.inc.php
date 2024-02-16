<?php // Filename: connect.inc.php

require __DIR__ . "/../db/db_connect.inc.php";

$orderby = 'last_name';
$filter = '';

if (isset($_GET['filter'])) {
    $filter = $_GET['filter'];
}

if (isset($_GET['sortby'])) {
    $orderby = $_GET['sortby'];
}

if (isset($_GET['clearfilter'])) {
    $filter = '';
}

if (isset($_GET["filter"])) {
    // Apply the filter the user selected to the database query.
    $sql = "SELECT * FROM $db_table WHERE last_name LIKE :filter";
    $stmt = $db->prepare($sql);
    $stmt->execute(["filter" => $filter . '%']);
} elseif (isset($_GET["sortby"])) {
    // Order the database query by the column selected by the user.
    if ($orderby == "first_name") {
        $sql = "SELECT * FROM $db_table ORDER BY first_name ASC";
    } elseif ($orderby == "last_name") {
        $sql = "SELECT * FROM $db_table ORDER BY last_name ASC";
    } elseif ($orderby == "student_id") {
        $sql = "SELECT * FROM $db_table ORDER BY student_id ASC";
    } elseif ($orderby == "phone") {
        $sql = "SELECT * FROM $db_table ORDER BY phone ASC";
    } elseif ($orderby == "email") {
        $sql = "SELECT * FROM $db_table ORDER BY email ASC";
    } elseif ($orderby == "gpa") {
        $sql = "SELECT * FROM $db_table ORDER BY gpa DESC";
    } elseif ($orderby == "financial_aid") {
        $sql = "SELECT * FROM $db_table ORDER BY financial_aid ASC";
    } elseif ($orderby == "degree_program") {
        $sql = "SELECT * FROM $db_table ORDER BY degree_program ASC";
    } elseif ($orderby == "graduation_date") {
        $sql = "SELECT * FROM $db_table ORDER BY graduation_date DESC";
    }
    $stmt = $db->prepare($sql);
    $stmt->execute();
    //$stmt->execute(["orderby" => $orderby]);
} else {
    // Pull all data from the database in no particular order.
    $sql = "SELECT * FROM $db_table";
    $stmt = $db->prepare($sql);
    $stmt->execute();
}

// Fetch the records from the database.
$records = $stmt->fetchAll();

// Display a message at the top of the screen indicating how many records were retrieved from the database.
if ($stmt->rowCount() == 0 && $filter != '') {
    echo "<h2 class=\"mt-4 alert alert-warning\">No Records for <strong>last names</strong> starting with <strong>$filter</strong></h2>";
} else {
    if (empty($filter)) {
        $text = '';
    } else {
        $text = " - last names starting with $filter";
    }
    echo "<h2 class=\"mt-4 alert alert-info\">" . $stmt->rowCount() . " Student Records" . $text . '</h2>';
}

// display alphabet filters
display_letter_filters($filter);

// display message if any
display_message();

// display the data
display_record_table($records);
