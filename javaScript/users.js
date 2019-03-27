// To store user/admin data for from database
var userDetails = {};
var adminDetails = {};

function detailsForSummaryPage(){
    var userName,name,email;
}

//Display details for "Cart" page
function detailsForCartPage(){

}

//Display Purchased items in "Purchased" page
function detailsForPurchasedPage(){
    
}

function detailsForAccountSettingsPage(){
    
}

//executes when "Buy Item" pressed in "Cart" page
function onClickBuyItem(){

}

function onClickChangeUserName(id){
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
}

function submitNewPassword(newPassword){
    var newPassword = document.getElementById(newPassword).value;    
}