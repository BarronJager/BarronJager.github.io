<?php // Filename: form.inc.php 
?>

<!-- Note the use of sticky fields below -->
<!-- Note the use of the PHP Ternary operator
Scroll down the page
http://php.net/manual/en/language.operators.comparison.php#language.operators.comparison.ternary
-->

<?php
// Button label logic
if (basename($_SERVER['PHP_SELF']) == 'create-record.php') {
    $button_label = "Save New Record";
} else if (basename($_SERVER['PHP_SELF']) == 'update-record.php') {
    $button_label = "Save Updated Record";
} else if (basename($_SERVER['PHP_SELF']) == 'advanced-search.php') {
    $button_label = "Search...";
}
?>

<form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="POST">
    <label class="col-form-label" for="first">First Name</label>
    <input class="form-control" type="text" id="first" name="first" value="<?= isset($first) ? $first : null ?>">
    <br>
    <label class="col-form-label" for="last">Last Name</label>
    <input class="form-control" type="text" id="last" name="last" value="<?= isset($last) ? $last : null ?>">
    <br>
    <label class="col-form-label" for="id">Student ID (cannot be changed)</label>
    <input class="form-control" type="number" id="id" name="student_id" value="<?= isset($student_id) ? $student_id : null ?>">
    <br>
    <label class="col-form-label" for="email">Email</label>
    <input class="form-control" type="text" id="email" name="email" value="<?= isset($email) ? $email : null ?>">
    <br>
    <label class="col-form-label" for="phone">Phone</label>
    <input class="form-control" type="text" id="phone" name="phone" value="<?= isset($phone) ? $phone : null ?>">
    <br>
    <label class="col-form-label" for="gpa">GPA</label>
    <input class="form-control" type="number" id="gpa" name="gpa" min="0" max="4" step="0.01" value="<?= isset($gpa) ? $gpa : null ?>">
    <br>
    <label class="col-form-label">Financial Aid</label>
    <div class="form-check">
        <input class="form-check-input" type="radio" name="financial_aid" value="1" id="fin_aid_yes" <?= $financial_aid_yes ? 'checked' : null ?>>
        <label class="form-check-label" for="fin_aid_yes">
            Yes
        </label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="radio" name="financial_aid" value="0" id="fin_aid_no" <?= $financial_aid_no ? 'checked' : null ?>>
        <label class="form-check-label" for="fin_aid_no">
            No
        </label>
    </div>

    <br>
    <label class="col-form-label" for="degree_program">Degree Program</label>
    <select class="form-select" aria-label="Default select" name="degree_program" id="degree_program">
        <option value="" <?= empty($degree_program) ? "selected" : null ?>>(Choose Program)</option>
        <option value="Undeclared" <?= $degree_program == "Undeclared" ? "selected" : null ?>>Undeclared</option>
        <option value="Aeronautical Engineering" <?= $degree_program == "Aeronautical Engineering" ? "selected" : null ?>>Aeronautical Engineering</option>
        <option value="Biology" <?= $degree_program == "Biology" ? "selected" : null ?>>Biology</option>
        <option value="Civil Engineering" <?= $degree_program == "Civil Engineering" ? "selected" : null ?>>Civil Engineering</option>
        <option value="Computer Engineering" <?= $degree_program == "Computer Engineering" ? "selected" : null ?>>Computer Engineering</option>
        <option value="Electrical Engineering" <?= $degree_program == "Electrical Engineering" ? "selected" : null ?>>Electrical Engineering</option>
    </select>
    <br>

    <label class="col-form-label" for="graduation_date">Graduation Date</label>
    <input class="form-control" type="date" id="graduation_date" name="graduation_date" value="<?= isset($graduation_date) ? $graduation_date : null ?>">
    <br>

    <a href="display-records.php">Cancel</a>&nbsp;&nbsp;
    <button class="btn btn-primary" type="submit"><?= $button_label ?></button>
    <input type="hidden" name="id" value="<?= isset($id) ? $id : null ?>">
</form>