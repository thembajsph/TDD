// don't change the isFromBellville function
function isFromBellville(regNumber) {
    return regNumber.startsWith("CY");
  }
  
  describe("The isFromBellville function ", function() {
    
    // don't change code above this line
    
    it("should return true for CY 123-223", function() {
      assert.equal(true, isFromBellville("CY 123-223"));
    });
    
    it("should return false for CY 123-223", function() {
      assert.equal(false, isFromBellville("CJ 123-223"));
    });
    
    // don't change code below this line
  });
  
  mocha.checkLeaks();
  mocha.run();