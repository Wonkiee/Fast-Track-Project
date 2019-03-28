//This is used to handle the SIGN IN part
var USER_NAME;

var userName = "rajitha";
var pssword = "rajitha";
function signIn(){
    clearField("signIn");
    var name = document.getElementById("userName_signIn").value;
    var password = document.getElementById("password_signIn").value;    

    if(name == "" || password == ""){
        alert("Please fill the empty fields!");
        return;
    }
    if(name == "admin" && password == "admin"){
        var href = "../html/admin.html";
        window.open(href);
        //window.location.assign(href);
    } 
    else if(name == userName && password == pssword){
        USER_NAME = userName;
        var href = "../html/user.html";
        window.open(href);
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


//return the user name of the logged user
function getUserName(){
    return USER_NAME;
}