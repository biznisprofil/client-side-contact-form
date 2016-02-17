//------------------------------------ Name field cannot be empty

function validateFormName() {
    var x = document.getElementById("contactname").value;
    if (x === null || x === "") {
        document.getElementById("error").innerHTML = '<span class="label label-danger">Name field cannot be empty</span>';
        return false;
    }
}

function focusFunctionName() {
    document.getElementById("error").innerHTML = '';
}

//------------------------------------ Phone field cannot be empty

function validateFormPhone() {
    var x = document.getElementById("phone").value;
    if (x === null || x === "") {
        document.getElementById("error1").innerHTML = '<span class="label label-danger">Phone field cannot be empty</span>';				
        return false;
    }
	     // Phone field must be a number and must be at least 5 characters
	else if (isNaN(x) || x.length < 5) {
			document.getElementById("error1").innerHTML = '<span class="label label-danger">Please enter a valid phone number</span>';
			return false;
			}
}

function focusFunctionPhone() {
    document.getElementById("error1").innerHTML = '';
}

//------------------------------------ Email field must be filled out

function validateFormEmail() {
    var x = document.getElementById("email").value;
    if (x === null || x === "") {
        document.getElementById("error2").innerHTML = '<span class="label label-danger">Email field must be filled out</span>';
        return false;
    }
}

function focusFunctionEmail() {
    document.getElementById("error2").innerHTML = '';
}

//--------------------------------------------------------------------
