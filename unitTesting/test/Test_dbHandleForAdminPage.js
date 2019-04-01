const assert = require('chai').assert;
const dbHandleObject = require('../../javaScript/dbHandleForAdminPage');
var sinon = require('sinon');
const expect = require('chai').expect;

var phoneBrands = [];

dbHandleObject.insertBrandsToList();
dbHandleObject.retrievePhoneDetails();

	describe('Testing Function -> retrieveBrands()',function(){
		
		it('Testing The Output for Correct Input', function(){
			assert.equal( dbHandleObject.retrieveBrands(0), "Apple");			
		})

		it('Testing The Output for negative index', function() {
	    	expect(dbHandleObject.retrieveBrands(-1)).to.equal("Incorrect Index");
	    });

		it('Testing The Output for a index greater than array size', function() {
	    	expect(dbHandleObject.retrieveBrands(20000)).to.equal("Incorrect Index");
	    });

	});
		
	describe('Testing Function -> returnArrayLenth()',function(){
		
		it('Testing The Output Format is a number or not', function(){
			assert.isNumber( dbHandleObject.returnArrayLenth());			
	})


	describe('Testing Function -> retrievePhoneDetails()',function(){
		
		it('Testing The Output is String or not', function(){
			assert.isString( dbHandleObject.retrievePhoneDetails());			
		})

	});
});