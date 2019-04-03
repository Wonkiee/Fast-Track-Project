// To store user data for from database
var userDetails = {};
var adminDetails = {};

document.write(userSignedIn.getUserName());
function detailsForSummaryPage(){
    var userName,name,email;
    
    //Retrieve User Details from DB
    fetch('http://localhost:8000/db/userdetails', {
        method: "get",
        mode: 'cors',
        headers:{
            'Accept': 'application/json',
            'Access-Control-Allow-Origin':'*',
            'Content-Type': 'application/json'
        }
    }).then(function(response){
        console.log(response.body);
    }).catch(function (error){
        console.log(error);
    })
}

//Display details for "Cart" page
function detailsForCartPage(){
    var para = document.getElementById("cart");
    //var item = '<h2>Item asdada <button class = "btn" onclick="onClickBuyItem()"> Buy Item </button> </h2>'
    var node = document.createElement("button");
    //var node = document.createTextNode("button");
    para.appendChild(node);

    //Retrieve Cart Details from DB
    fetch('http://localhost:8000/db/cart', {
        method: "get",
        mode: 'cors',
        headers:{
            'Accept': 'application/json',
            'Access-Control-Allow-Origin':'*',
            'Content-Type': 'application/json'
        }
    }).then(function(response){
        console.log(response.body);
    }).catch(function (error){
        console.log(error);
    })
}

//Display Purchased items in "Purchased" page
function detailsForPurchasedPage(){
    //Retrieve Purchased Details from DB
    fetch('http://localhost:8000/db/purchased', {
        method: "get",
        mode: 'cors',
        headers:{
            'Accept': 'application/json',
            'Access-Control-Allow-Origin':'*',
            'Content-Type': 'application/json'
        }
    }).then(function(response){
        console.log(response.body);
    }).catch(function (error){
        console.log(error);
    })
}

function detailsForAccountSettingsPage(){
    
}

//executes when "Buy Item" pressed in "Cart" page
function onClickBuyItem(){

}

function onClickChangeUserName(id){
    //detailsForCartPage();
    var textBox = document.getElementById("txt_newPassword");
    var button = document.getElementById("btn_submitNewPassword");
    textBox.style.display = "none";
    button.style.display = "none";

    document.getElementById("txt_newUserName").style.display='block';
    document.getElementById("btn_submitNewUserName").style.display='block';

}

//Display Add Phone Text box and button
function onClickChangePassword(){
    var textBox = document.getElementById("txt_newUserName");
    var button = document.getElementById("btn_submitNewUserName");
    textBox.style.display = "none";
    button.style.display = "none";

    document.getElementById("txt_newPassword").style.display='block';
    document.getElementById("btn_submitNewPassword").style.display='block';
}

function submitNewUserName(newUserName){
    var newUserName = document.getElementById(newUserName).value;
    if(newUserName == ""){
        alert("Please fil the empty fields!");
        return;
    }
    
    newUserNameJSON = {'newUserName':newUserName};  
    fetch('http://localhost:8000/db/changeusername', {
        method: "post",
        body: JSON.stringify(newUserNameJSON),
        mode: 'cors',
        headers:{
            'Accept': 'application/json',
            'Access-Control-Allow-Origin':'*',
            'Content-Type': 'application/json'
        }
    }).then(function(response){
        console.log(response.body);
    }).catch(function (error){
        console.log(error);
    })

    //document.write(newUserName);
}

function submitNewPassword(newPassword){
    var newPassword = document.getElementById(newPassword).value;  
    if(newPassword == ""){
        alert("Please fil the empty fields!");
        return;
    }  

    newPasswordJSON = {'newPassword':newPassword};  
    fetch('http://localhost:8000/db/changepassword', {
        method: "post",
        body: JSON.stringify(newPasswordJSON),
        mode: 'cors',
        headers:{
            'Accept': 'application/json',
            'Access-Control-Allow-Origin':'*',
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', JSON.stringify(response)));
    
    
    // .then(function(response){
    //     console.log(response.body);
    // }).catch(function (error){
    //     console.log(error);
    // })

    //document.write(newPassword);
}
