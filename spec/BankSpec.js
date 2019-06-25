describe("Bank", function() {
  var Bank = require('../src/Bank');
  var bank;

  beforeEach(function() {
    bank = new Bank();
  });

  it("should return the header of the statement", function() {
    expect(bank.statement()).toBe('date || credit || debit || balance');
  })
});

// it("should be able to play a Song", function() {
//   player.play(song);
//   expect(player.currentlyPlayingSong).toEqual(song);

//   //demonstrates use of custom matcher
//   expect(player).toBePlaying(song);
// });