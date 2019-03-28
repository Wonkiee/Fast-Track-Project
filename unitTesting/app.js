var phoneBrands = [];
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

insertBrandsToList();
module.exports = function retrieveBrands(index){
    return phoneBrands[index];
}

module.exports = function returnArrayLenth(){
    return phoneBrands.length;
}