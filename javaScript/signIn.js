//This is used to handle the SIGN IN part

var userName = "rajitha";
var pssword = "rajitha";
function signIn(){
    clearField("signIn");
    var name = document.getElementById("userName_signIn").value;
    var password = document.getElementById("password_signIn").value;

    if(name === userName && password === pssword){
        document.write("Valid User!");
    }
    else{
        document.write("Wrong Credentials");
    }
    
}

function clearField(tabName) {
    var i;
    var x = document.getElementsByClassName("account");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    document.getElementById(tabName).style.display = "block";  
}