describe("Bank", function() {
  var Bank = require('../src/Bank');
  var bank;

  beforeEach(function() {
    bank = new Bank();
  });

  it("should return 1", function() {
    expect(bank.balance()).toBe(1);
  })
});

// it("should be able to play a Song", function() {
//   player.play(song);
//   expect(player.currentlyPlayingSong).toEqual(song);

//   //demonstrates use of custom matcher
//   expect(player).toBePlaying(song);
// });