// don't change the countRegNumber function

// Note that valid reg numbers starts with CY or CJ
function countRegNumber(regList){
    var counter = 0;
    const regNumbers = regList.split(",");
    for (var i=0;i<regNumbers.length;i++) {
        var regNumber = regNumbers[i].trim();
        if (regNumber.startsWith("CL")) {
          return 0;
        }
      
        if (regNumber.startsWith("CY")) {
          counter++;
        } else if (regNumber.startsWith("CJ")) {
          counter++;
        }
    }
    
    return counter;
  }
  
  // don't change any code above this line
  
  describe("The countRegNumber is checking for number of 'CY'  plates function ", function() {
    
    // don't change code above this line
    
    it("should return 1 for 'CY 123-223'", function() {
      
      // change anything in here to make the test pass
      assert.equal(1, countRegNumber("CY 123-223, CA 123-123"));
    });
    
    it("should return 2 - but the parameter needs work'", function() {
      var EXPECTED_COUNT = 2;
      
      // only change code below this line in this function to make this test pass
      
      assert.equal(EXPECTED_COUNT, countRegNumber("CY 123-123, CY 123-123"));
    });
    
    it("should return 5 - but the parameter needs work'", function() {
      var EXPECTED_COUNT = 5;
      
      // only change code below this line in this function to make this test pass
      
      assert.equal(EXPECTED_COUNT, countRegNumber("CY 123-123, CA 123-123, CY 123-123, CY 123-123, CY 123-123, CY 123-123"));
    });
    
    it("should return 3 - but there is a curveball'", function() {
      var EXPECTED_COUNT = 3;
      
      // only change code below this line in this function to make this test pass
      
      // change one of the reg numbers in the string below to fix this test 
      assert.equal(EXPECTED_COUNT, countRegNumber("CY 123-123, CA 123-123, CY 123-123, CA 123-123, CY 123-123, CA 123-123"));
    });
    
  });
  
  
  
  mocha.checkLeaks();
  mocha.run();