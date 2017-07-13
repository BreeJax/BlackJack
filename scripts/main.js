/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/



//if cards <= 21, you win
//take

//create an array(or object with a set of keys???) showing the cards
//Find a way to determin how many cards are in the hand
//find a way to find the SUM of those cards
//return that sum

function handValue (hand) {
  let cards = {"2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "10": 10,
  "J": 10, "Q": 10, "K": 10, "A": 11 }
  let totalValue = 0
  for (var i = 0; i < hand.length; i++) {
    totalValue += cards[hand[i]]
  }
  for (var i = 0; i < hand.length; i++) {
    if (hand[i] === "A" && totalValue > 21) {
      totalValue -= 10
    }
  }
  return totalValue
  console.log(totalValue)
}



/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
