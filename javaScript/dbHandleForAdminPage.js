
//This stores the total phone brands the web site has
var phoneBrands = []; //array
var phoneDetails = {}; //dictionary

//User | Admin Details
var userDetails = {};
var adminDetails = {};

var paragraphCreated = false;
var textBoxCreated = false;

//function to retrieve the brands to the list from database
function insertBrandsToList(){

    //push data to this from DB
    phoneBrands.push("Apple");
    phoneBrands.push("Samsung");
    phoneBrands.push("One Plus");
    phoneBrands.push("Huawei");
    phoneBrands.push("Sony");
    phoneBrands.push("LG");
    phoneBrands.push("Nokia");
    phoneBrands.push("Xiomi");
    phoneBrands.push("OPPO");
    phoneBrands.push("Lenovo");
    phoneBrands.push("Asuz");
    phoneBrands.push("Panasonic");
    phoneBrands.push("BlackBerry");
    phoneBrands.push("Dialog");
}

//Retrieve the brands from the list
var retBrands = function retrieveBrands(index){
    if(index < 0 || index >= phoneBrands.length)
        return;
    return phoneBrands[index];
}

//returns the number of brands available
module.exports = function returnArrayLenth(){
    return phoneBrands.length;
}


//Get phone details to the list from database
function retrievePhoneDetails(){
    for(var i = 0; i < returnArrayLenth(); i++)
        phoneDetails[retrieveBrands(i)] = [i] ;
}

insertBrandsToList();
retrievePhoneDetails();


//Admin Page

//Fucntion to execute when a phone brand is clicked on the admin page
function onclickBrand(clickedButtonId){
    if(paragraphCreated){
        var parent = document.getElementById("displayDetails");
        var child = document.getElementById("para");
        parent.removeChild(child);
    }
    var brandDetails = phoneDetails[clickedButtonId];

    var para = document.createElement("p");
    para.setAttribute("id", "para");
    var node = document.createTextNode(brandDetails);
    para.appendChild(node);
    var element = document.getElementById("displayDetails");
    element.appendChild(para);
    paragraphCreated = true;
}

//Display Add Brand Text box and button
function addBrand(id){
    var textBox = document.getElementById("txt_addPhone");
    var button = document.getElementById("btn_addPhone");
    textBox.style.display = "none";
    button.style.display = "none";

    document.getElementById("txt_addBrand").style.display='block';
    document.getElementById("btn_addBrand").style.display='block';

}

//Display Add Phone Text box and button
function addPhone(){
    var textBox = document.getElementById("txt_addBrand");
    var button = document.getElementById("btn_addBrand");
    textBox.style.display = "none";
    button.style.display = "none";

    document.getElementById("txt_addPhone").style.display='block';
    document.getElementById("btn_addPhone").style.display='block';
}

//Submit the newly added Phone Brand to DB
function submitBrand(txtBoxId){
    var brandName = document.getElementById(txtBoxId).value;
    phoneBrands.push(brandName);
}

//Submit the newly added phone model to DB
function submitPhone(textBoxId){
    var phoneModelName = document.getElementById(textBoxId).value;
    phoneDetails[phoneModelName] = "newPhoneModel" ;
}
