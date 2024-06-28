function validateForm() {

let fname = document.forms["jobApplicationForm"]["firstname"].value;
if (fname == "") {
    window.alert("Missing First Name");
    fname.setAttribute("style") // fix
    return false;
}

let lname = document.forms["jobApplicationForm"]["lastname"].value;
if (lname == "") {
    window.alert("Missing Last Name");
    return false;
}

let email = document.forms["jobApplicationForm"]["email"].value;
if (email == "") {
    window.alert("Missing email");
    return false;
}

let phonenumber = document.forms["jobApplicationForm"]["telephone"].value;
if (phonenumber == "") {
    window.alert("Missing phone number");
    return false;
}

let question1 = document.forms["jobApplicationForm"]["jobType"].value;
if (!question1) {
    window.alert("Select Job Type");
    return false;
}

let question2 = document.forms["jobApplicationForm"]["employmentType"].value;
if (!question2) {
    window.alert("Select Current Employment");
    return false;
}

// (fname != "" && lname != "" && email != "" && question1 && question2 && question3) {
else {
    alert(`Thank You for applying ${fname}, We will contact you at ${email}.`);
    return true;
}
}