
function transportFee(shift){
    if (shift == 'morning'){
      return 'R20'
    }
    else if (shift == 'afternoon'){
      return 'R10'
    }
    else {
      return 'free'
    }
    
  }
  
  // don't change anything above this line.
  
  // Write 3 different `it` functions to test the three different return types from the `transportFee` function.
  
  describe("The transportFee function ", function(){
    
      it ("should be properly tested by you!", function() {
          // todo fix this assert to call isWeekday correctly.
          assert.equal("R20", transportFee("morning"));
  }); 
  
  it ("must represent the midday also", function()  { 
  assert.equal("R10", transportFee("afternoon"));
  });
  
  it ("should also account for late nights also", function() {
  assert.equal("free", transportFee("else"));
  });
  }); 
  
  
  
  mocha.run();
  