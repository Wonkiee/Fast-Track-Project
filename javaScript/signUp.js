//This is used to handle the SIGN UP PART
    
class SignUp{

    signUp(){
        var name = document.getElementById("name").value;
        var userName = document.getElementById("userName").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var rePassword = document.getElementById("rePassword").value;

        //These data should be sent to DB
        
        if(name == "" || userName == "" || email == "" || password == "" || rePassword == ""){
            alert("Please Fill The Missing Fields!");
            return;
        }
        
        var signUpDetails = { "name": name, "userName": userName, "email": email, "password": password, "rePassword": rePassword};

        fetch('http://localhost:8000/signup', {
            method: "post",
            mode: 'cors',
            body: JSON.stringify(signUpDetails),
            headers: {
                'Accept': 'application/json',
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json'
            }
        }).then(function(response){
            console.log("1");
            if( response.status == "OK" ){
                console.log(response.status);
                redirect: window.location.replace("../html/user.html");
            }
        }).then(function(text){
            console.log("2");
            console.log(text);
        }).catch(function (error){
            console.log("3");
            console.log(error);
        })
            
    }

    clearField(tabName) {
        var i;
        var x = document.getElementsByClassName("account");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
        }
        document.getElementById(tabName).style.display = "block";  
    }

}