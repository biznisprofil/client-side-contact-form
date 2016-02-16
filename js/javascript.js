function validateFormName() {
    var x = document.getElementById("contactname").value;
    if (x == null || x == "") {
        document.getElementById("error").innerHTML = '<span class="label label-danger">Name field cannot be empty</span>';
        return false;
    }
}

function focusFunctionName() {
    document.getElementById("error").innerHTML = '';
}

//--------------------------------------------------------------------

function validateFormPhone() {
    var x = document.getElementById("phone").value;
    if (x == null || x == "") {
        document.getElementById("error1").innerHTML = '<span class="label label-danger">Phone field cannot be empty</span>';
        return false;
    }
}

function focusFunctionPhone() {
    document.getElementById("error1").innerHTML = '';
}

//--------------------------------------------------------------------

function validateFormEmail() {
    var x = document.getElementById("email").value;
    if (x == null || x == "") {
        document.getElementById("error2").innerHTML = '<span class="label label-danger">Email field must be filled out</span>';
        return false;
    }
}

function focusFunctionEmail() {
    document.getElementById("error2").innerHTML = '';
}

//--------------------------------------------------------------------
