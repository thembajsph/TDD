 // fix this function to make the unit tests pass below
 function greet(name) {
    // write your code here
    return("Hello, " + name);
    // write your code above this line
  }
  
  // don't change any code below this line
  
  describe("Greet is working fine", function() {
    
    it("should be able to greet Lindani", function() {
      assert.equal("Hello, Lindani", greet("Lindani"));
    });
    
    it("should be able to greet Siyanda", function() {
      assert.equal("Hello, Siyanda", greet("Siyanda"));
    });
    
  });
  
  mocha.checkLeaks();
  mocha.run();