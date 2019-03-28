const assert = require('chai').assert;
const r = require('../app');//('../../javaScript/dbHandleForAdminPage');
var sinon = require('sinon');

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


describe('First Test',function(){
	
	it('Test 1', function(){
		//assert is used here
		assert.equal( r(0), 'Apple');			
	})
	it('Test 3', function(){
		//assert is used here
		assert.equal( r(1), 'Samsung');	
	})
	it('Test 3', function(){
		//assert is used here
		assert.equal( r(2), 'One Plus');	
	})
	it('Test 3', function(){
		//assert is used here
		assert.equal( r(3), 'Samsuasng');	
	})

});
