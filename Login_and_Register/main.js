/*FORM*/
/*name check*/
function nameCheck() {
    var firstName = document.forms["signup"]["firstname"]; 
    var lastName = document.forms["signup"]["lastname"];
    if (firstName.value === "" || lastName.value===""){
        if (firstName.value === "" && lastName.value === ""){
            firstName.style.background="rgba(252, 0, 0, 0.7)";
            lastName.style.background="rgba(252, 0, 0, 0.7)";
        }
        else if (lastName.value !== ""){
            lastName.style.background="green";
            firstName.style.background="rgba(252, 0, 0, 0.7)";
        }
        else if (firstName.value !== ""){
            firstName.style.background="green";
            lastName.style.background="rgba(252, 0, 0, 0.7)";
        }
    }
    
    else {
        firstName.style.background="green";
        lastName.style.background="green";
    }
}

/*email check*/

function emailCheck() {
    
    var e = document.forms["signup"]["email-address"];
    var eValue = document.forms["signup"]["email-address"].value;
    var e2 = document.forms["signup"]["ConfEmail"];
    var e2Value = document.forms["signup"]["ConfEmail"].value;
    var check1 = eValue.indexOf("@");
    var check2 = eValue.lastIndexOf(".");
    
    
    
    if (check1<1 || check2<check1+2 || check2+2>=eValue.length)  {
        e.style.background="rgba(252, 0, 0, 0.7)";
        e2.style.background="rgba(252, 0, 0, 0.7)"; 
    }
    else if (eValue === e2Value){
        e.style.background="green";
        e2.style.background="green";
    }
    else {
        e.style.background="green";
        e2.style.background="rgba(252, 0, 0, 0.7)";  
    }
    

}



/*password check*/
function CheckP() {
    var pass1 = document.forms["signup"]["password"];
    var pass2 = document.forms["signup"]["Confirm Password"];
    var form = document.forms["signup"];
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,15}$/; /*must have one digit, must have one lower case, must have 1 upper case, must have 4-15 characters*/
    
        if (pass1.value.match(passw)) {
            
            if (pass1.value === pass2.value){
                pass1.style.backgroundColor = "green";
                pass2.style.backgroundColor = "green";
                form.submit();
            }

            else if (pass1 !== pass2) {
                    pass1.style.backgroundColor = "green";
                    pass2.style.backgroundColor = "rgba(252, 0, 0, 0.7)";

            }
        }
         else { 
             pass1.style.backgroundColor = "rgba(252, 0, 0, 0.7)";
             pass2.style.backgroundColor = "rgba(252, 0, 0, 0.7)"; 
        }
        }