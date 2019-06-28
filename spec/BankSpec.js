describe("Bank", function() {
  var Bank = require('../src/Bank');
  var bank;

  beforeEach(function() {
    bank = new Bank();
    console.log = jasmine.createSpy("log");
  });

  it("should return the header of the statement", function() {
    bank.statement();
    expect(console.log).toHaveBeenCalledWith('date || credit || debit || balance');
  })

  it('should return user input', function() {
    var stdin = require('mock-stdin').stdin();
    bank.deposit();
    stdin.send(1000);
    bank.statement();
    expect(console.log).toHaveBeenCalledWith('06.08.19 || 1000 || debit || 1000');
  })
});


