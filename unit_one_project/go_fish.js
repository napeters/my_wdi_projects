var GoFish = (function() {
  var suits = ['Spades', 'Clubs', 'Diamonds', 'Hearts'];
  var values = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];
  var deck = [];
  var shuffledDeck = [];
  var playerOne = [];
  var playerTwo = [];
  var playerOneSets = [];
  var playerTwoSets = [];
  var playerTurn = 0;
  return {
          makeDeck: function() {
            for (i in suits) {
              for (x in values) {
                var card = {
                  suit: '',
                  value: ''
                };
                card.suit = suits[i];
                card.value = values[x];
                deck.push(card);
              }
            }
          },

          shuffleDeck: function() {
            while (shuffledDeck.length < 52) {
              var randomCard = deck[Math.floor(Math.random()*52)];
              if ((shuffledDeck.indexOf(randomCard)) === -1) {
                shuffledDeck.push(randomCard);
              }
            }
          },

          deal: function() {
            for (i = 0; i < 14; i++) {
              if (i % 2 === 0) {
                playerOne.push(shuffledDeck[0]);
              } else {
                playerTwo.push(shuffledDeck[0]);
              }
              shuffledDeck.shift();
            }
            //take the below out later
            var playerOneVisual = [];
            for (i in playerOne) {
              playerOneVisual.push(playerOne[i].value + '-' + playerOne[i].suit);
            }
            console.log(playerOneVisual);
            var playerTwoVisual = [];
            for (i in playerTwo) {
              playerTwoVisual.push(playerTwo[i].value + '-' + playerTwo[i].suit);
            }
            console.log(playerTwoVisual);
            console.log(shuffledDeck);
          },

          makePlay: function(cardValue) {
            matched = [];
            if (playerTurn % 2 === 0) {
              for (i in playerTwo) {
                if (playerTwo[i].value === cardValue) {
                  matched.push(playerTwo[i]);
                }
              }
              for (i in matched) {
                playerOne.push(matched[i]);
                var indexNeeded = playerTwo.indexOf(matched[i]);
                playerTwo.splice(indexNeeded, 1);
              }
            } else {
              for (i in playerOne) {
                if (playerOne[i].value === cardValue) {
                  matched.push(playerOne[i]);
                }
              }
              for (i in matched) {
                playerTwo.push(matched[i]);
                var indexNeeded = playerOne.indexOf(matched[i]);
                playerOne.splice(indexNeeded, 1);
              }
            }
            if (matched.length === 0) {
              console.log('go fish')
            } else if (matched.length === 1){
              console.log('Yes here is my ' + matched[0].value)
            } else {
              console.log('Yes here are my ' + matched[0].value + 's')
            }
            //take the below out later
            var playerOneVisual = [];
            for (i in playerOne) {
              playerOneVisual.push(playerOne[i].value + '-' + playerOne[i].suit);
            }
            console.log(playerOneVisual);
            var playerTwoVisual = [];
            for (i in playerTwo) {
              playerTwoVisual.push(playerTwo[i].value + '-' + playerTwo[i].suit);
            }
            console.log(playerTwoVisual);
            console.log(shuffledDeck);
          },

          checkForFour: function() {
            for (i in values) {
              var arrayOfCountedCards = [];
              if (playerTurn % 2 === 0) {
                for (x in playerOne) {
                  if (values[i] === playerOne[x].value) {
                    arrayOfCountedCards.push(playerOne[x]);
                    if (arrayOfCountedCards.length === 4) {
                      for (a in arrayOfCountedCards) {
                        playerOneSets.push(arrayOfCountedCards[a]);
                        var indexNeededAgain = playerOne.indexOf(arrayOfCountedCards[a]);
                        playerOne.splice(indexNeededAgain, 1);
                      }
                    }
                  }
                }
              } else {
                for (x in playerTwo) {
                  if (values[i] === playerTwo[x].value) {
                    arrayOfCountedCards.push(playerTwo[x]);
                    if (arrayOfCountedCards.length === 4) {
                      for (a in arrayOfCountedCards) {
                        playerTwoSets.push(arrayOfCountedCards[a]);
                        var indexNeededAgain = playerTwo.indexOf(arrayOfCountedCards[a]);
                        playerTwo.splice(indexNeededAgain, 1);
                      }
                    }
                  }
                }
              }
            }
            //take the below out later
            var playerOneVisual = [];
            for (i in playerOne) {
              playerOneVisual.push(playerOne[i].value + '-' + playerOne[i].suit);
            }
            console.log(playerOneVisual);
            console.log(playerOneSets);
            var playerTwoVisual = [];
            for (i in playerTwo) {
              playerTwoVisual.push(playerTwo[i].value + '-' + playerTwo[i].suit);
            }
            console.log(playerTwoVisual);
            console.log(playerTwoSets);
          },

          draw: function() {
            if (playerTurn % 2 === 0) {
              playerOne.push(shuffledDeck[0]);
            } else {
              playerTwo.push(shuffledDeck[0]);
            }
            shuffledDeck.shift();
            //take the below out later
            var playerOneVisual = [];
            for (i in playerOne) {
              playerOneVisual.push(playerOne[i].value + '-' + playerOne[i].suit);
            }
            console.log(playerOneVisual);
            var playerTwoVisual = [];
            for (i in playerTwo) {
              playerTwoVisual.push(playerTwo[i].value + '-' + playerTwo[i].suit);
            }
            console.log(playerTwoVisual);
            console.log(shuffledDeck);
          },

          switchTurn: function() {
            // for now...
            playerTurn++;
          },
  }
}());
GoFish.makeDeck();
GoFish.shuffleDeck();
GoFish.deal();
