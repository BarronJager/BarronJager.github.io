<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $sql = "SELECT * FROM $db_table WHERE ";

    // This list will contain the filter criteria for the SQL select statement.
    $data = [];

    // Go through the submitted form fields and if they have data, add the field to the search criteria.
    if (!empty($_POST["first"])) {
        array_push($data, "first_name LIKE {$db->quote($_POST["first"] . '%')}");
    }

    if (!empty($_POST["last"])) {
        array_push($data, "last_name LIKE {$db->quote($_POST["last"] . '%')}");
    }

    if (!empty($_POST["student_id"])) {
        array_push($data, "student_id = {$_POST["student_id"]}");
    }

    if (!empty($_POST["email"])) {
        array_push($data, "email LIKE {$db->quote($_POST["email"] . '%')}");
    }

    if (!empty($_POST["phone"])) {
        array_push($data, "phone LIKE {$db->quote($_POST["phone"] . '%')}");
    }

    if (!empty($_POST["gpa"])) {
        array_push($data, "gpa = {$_POST["gpa"]}");
    }

    if (isset($_POST["financial_aid"])) {
        array_push($data, "financial_aid = {$_POST["financial_aid"]}");
    }

    if (!empty($_POST["degree_program"])) {
        array_push($data, "degree_program = {$db->quote($_POST["degree_program"])}");
    }

    if (!empty($_POST["graduation_date"])) {
        array_push($data, "graduation_date = {$db->quote($_POST["graduation_date"])}");
    }

    // Create an SQL SELECT statement from all of the filter criteria.
    $sql = $sql . implode(" and ", $data);

    // If there is no filter criteria, no need to search the database.
    if (count($data) > 0) {
        $stmt = $db->prepare($sql);
        $stmt->execute();
        $results = $stmt->fetchAll();
        display_record_table($results);
    } else {
        echo '<div class="alert alert-info">';
        echo '<h2>Please select one or more fields to search on</h2>';
        echo '</div>';
    }

} else {
    echo '<div class="alert alert-info">';
    echo '<h2>Search results will appear here</h2>';
    echo '</div>';
}
