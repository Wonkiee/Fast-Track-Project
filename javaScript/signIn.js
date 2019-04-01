//This is used to handle the SIGN IN part
var USER_NAME;

class SignIn{
    
    signIn(){
        var name = document.getElementById("userName_signIn").value;
        var password = document.getElementById("password_signIn").value;    

        if(name == "" || password == ""){
            alert("Please fill the empty fields!");
            return;
        }

        var signInDetails = { "userName":name, "password":password};

        fetch('http://localhost:8000/signin', {
            method: "post",
            mode: 'cors',
            body: JSON.stringify(signInDetails),
            headers: {
                'Accept': 'application/json',
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json'
        }
        }).then(function(response){ 
            if( response.status == 200 ){
                USER_NAME = name;
                redirect: window.location.replace("../html/user.html");
            }
            if( response.status == 201 ){
                USER_NAME = name;
                redirect: window.location.replace("../html/admin.html");
            }
            if( response.status == 404 )
                alert('Wrong Credentials!');
        }).then(function(text){
            console.log(text);
        }).catch(function (error){
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

    //return the user name of the logged user
    getUserName(){
        return USER_NAME;
    }


}