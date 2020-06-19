function isWeekday(day){
    return !day.startsWith("S");
}


// fix the `it `functions below to call the isWeekday function correctly to pass the tests.


describe("The isWeekday function ", function(){
  
    it ("should say that Monday is a weekday", function() {
        // todo fix this assert to call isWeekday correctly.
        assert.equal(true, isWeekday("Monday"));
    });
  
    it ("should say that Friday is a weekday", function() {
        // todo fix this assert to call isWeekday correctly.
        assert.equal(true, isWeekday("Friday"));
    });
    
    it ("should say that Sunday is not weekday", function() {
        // todo fix this assert to call isWeekday correctly.
        assert.equal(false, isWeekday("Sunday"));
    });
  
    it ("should say that Saturday is not weekday", function() {
        // todo fix this assert to call isWeekday correctly.
        assert.equal(false, isWeekday("Saturday"));
    });
    
  
    
});


mocha.run();