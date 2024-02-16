<?php // Filename: update.inc.php

require_once __DIR__ . "/../db/db_connect.inc.php";
require_once __DIR__ . "/../app/config.inc.php";

if (isset($_GET["id"])) {
    $id = $_GET["id"];
}

$error_bucket = [];

if($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST["id"];
        // First insure that all required fields are filled in
        if (empty($_POST["first"])) {
            array_push($error_bucket, "<p>A first name is required.</p>");
        } else {
            $first = $_POST["first"];
        }
        if (empty($_POST["last"])) {
            array_push($error_bucket, "<p>A last name is required.</p>");
        } else {
            $last = $_POST["last"];
        }
        if (empty($_POST["student_id"])) {
            array_push($error_bucket, "<p>A student ID is required.</p>");
        } else {
            $student_id = intval($_POST["student_id"]);
        }
        if (empty($_POST["email"])) {
            array_push($error_bucket, "<p>An email address is required.</p>");
        } else {
            $email = $_POST["email"];
        }
        if (empty($_POST["phone"])) {
            array_push($error_bucket, "<p>A phone number is required.</p>");
        } else {
            $phone = $_POST["phone"];
        }
        if (empty($_POST["gpa"])) {
            $gpa = 0;
        } else {
            $gpa = floatval($_POST["gpa"]);
        }
        if (!isset($_POST["financial_aid"]) || ($_POST["financial_aid"] != 0 && $_POST["financial_aid"] != 1)) {
            array_push($error_bucket, "<p>A financial aid status is required.</p>");
        } else {
            if ($_POST["financial_aid"] == '1') {
                $financial_aid = $_POST["financial_aid"];
                $financial_aid_yes = true;
                $financial_aid_no = false;
            } else {
                $financial_aid = $_POST["financial_aid"];
                $financial_aid_yes = false;
                $financial_aid_no = true;
            }
        }
    // This will always have a value when the form is submitted.
    $degree_program = $_POST["degree_program"];

    if (empty($_POST["graduation_date"])) {
        $graduation_date = null;
    } else {
        $graduation_date = $_POST["graduation_date"];
    }

    // If we have no errors than we can try and insert the data
    if (count($error_bucket) == 0) {
        // SQL for updating the record in the database.
        $sql = "UPDATE $db_table SET first_name=:first, last_name=:last, email=:email, phone=:phone, gpa=:gpa, degree_program=:degree_program, financial_aid=:financial_aid, graduation_date=:graduation_date";
        $sql .= " WHERE id=:id LIMIT 1";

        $stmt = $db->prepare($sql);
        $stmt->execute([
            "first" => $first, "last" => $last, "email" => $email, "phone" => $phone,  "gpa" => $gpa, "degree_program" => $degree_program, "financial_aid" => $financial_aid, "graduation_date" => $graduation_date,
            "id" => $id
        ]);

        if ($stmt->rowCount() <= 1) {
            header("Location: display-records.php?message=The record for $first $last has been updated.");
        }
    } else {
        display_error_bucket($error_bucket);
    }
}

$sql = "SELECT * FROM  $db_table WHERE ID=:id";

$stmt = $db->prepare($sql);
$stmt->execute(["id" => $id]);

if ($stmt->rowCount() == 1) {
    $row = $stmt->fetch();
    $first = $row->first_name;
    $last = $row->last_name;
    $student_id = $row->student_id;
    $email = $row->email;
    $phone = $row->phone;
    $gpa = $row->gpa;
    $financial_aid = $row->financial_aid;
    if ($financial_aid == '1') {
        $financial_aid_yes = true;
        $financial_aid_no = false;
    } elseif ($financial_aid == 0) {
        $financial_aid_yes = false;
        $financial_aid_no = true;
    }
    $degree_program = $row->degree_program;
    $graduation_date = $row->graduation_date;
}