function validate() {
    let name = document.getElementById("name").value;
    // let inputtext = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let error_message = document.getElementById("error_message");
    error_message.style.padding = "15px";
    let text;
    if (name.length < 2) {
        text = "Please Enter valid Name";
        error_message.innerHTML = text;
        return false;
    }

    if (email.indexOf("@") == -1 || email.length < 6) {
        text = "Please Enter valid Email";
        error_message.innerHTML = text;
        return false;
    }

    // if (phone.length != 10) {
    //     text = "Please Enter valid Phone Number";
    //     error_message.innerHTML = text;
    //     return false;
    // }
    alert("Form Submitted!");
    return true;
}