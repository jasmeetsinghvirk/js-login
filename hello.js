/*function check(form) {
    if (form.eml.value == form.ceml.value) {
        alert("Logging In")
    } else {
        alert("Try Again")
    }

}*/

function validation() {
    var user = document.getElementById("user").value;
    var mails = document.getElementById("mail").value;
    var pssswrd = document.getElementById("pss").value;
    var cnpsswrd = document.getElementById("cnpss").value;
    var mobile = document.getElementById("num").value;

    if (user == "") {
        document.getElementById("username").innerHTML = "** please fill the username field";
        return false;
    }
    if (mails == "") {
        document.getElementById("email").innerHTML = "** please fill the mail field";
        return false;
    }
    if (pssswrd == "") {
        document.getElementById("psswrd").innerHTML = "** please fill the password field";
        return false;
    }
    if (cnpsswrd == "") {
        document.getElementById("cnfpss").innerHTML = "** please fill the confirm password field";
        return false;
    }
    if (mobile == "") {
        document.getElementById("numb").innerHTML = "** please fill the number field";
        return false;
    }
    if ((user.length <= 2) || (user.length > 20)) {
        document.getElementById("username").innerHTML = "** length between 2 to 20 ";
        return false;
    }
    if ((pssswrd.length <= 2) || (pssswrd.length > 20)) {
        document.getElementById("psswrd").innerHTML = "** length between 2 to 20 ";
        return false;
    }
    if (pssswrd != cnpsswrd) {
        document.getElementById("psswrd").innerHTML = "** password not match";
        return false;
    }
    if (mails.indexOf("@") <= 0) {
        document.getElementById("email").innerHTML = "** invalid position";
        return false;
    }
}