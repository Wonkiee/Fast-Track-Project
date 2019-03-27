//This is used to handle the SIGN UP PART

function signUp(){
    var name = document.getElementById("name").value;
    var userName = document.getElementById("userName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var rePassword = document.getElementById("rePassword").value;

    //These data should be sent to DB
    
    //if(name == "" || userName == "" || email == "" || password == "" || rePassword == ""){
    //    alert("Please Fill The Missing Fields!");
    //    return;
    //}
    document.write("Account Created");

}

function clearField(tabName) {
    var i;
    var x = document.getElementsByClassName("account");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    document.getElementById(tabName).style.display = "block";  
}

