import { realpathSync } from "fs";

// ~~~~~~~~~~Person~~~~~~~~~~

class Person {
  constructor(name, email, phone) {
      this.name = name;
      this.email = email;
      this.phone = phone;
  }
  greet(otherPerson) {
    console.log('Hello ' + otherPerson.name + ', I am ' + this.name + '!');
  }
  print() {
    console.log('Email: ' + this.email + ', Phone: ' + this.phone + '!');
  }
}

let obj = new Person()

// 1
let sonny = new Person('Sonny', 'sonny@hotmail.com', '483-485-4948')

// 2
let jordan = new Person('Jordan', 'jordan@aol.com', '495-586-3456')

// 3
sonny.greet(jordan)

// 4
jordan.greet(sonny)

// 5
console.log('Email: ' + sonny.email + ', Phone: ' +  sonny.phone)

// 6
console.log('Email: ' + jordan.email + ', Phone: ' +  jordan.phone)


// ~~~~~~~~~~Cards~~~~~~~~~~~

class Card {
  constructor (point, suit) {
    this.point = point
    this.suit = suit
  }
}

let myCard = new Card(5, 'diamonds')

myCard.point
// 5
myCard.suit
// 'diamonds'


// ~~~~~~~~~~getImageURL()~~~~~~~~~~~

class Card {
  constructor (point, suit) {
    this.point = point
    this.suit = suit
  }
  getImageURL () {
    return `images/` + this.point + `_of_` + this.suit + `.png`
  }
}

let myCard = new Card(5, 'diamonds')
myCard.getImageURL()
// "images/5_of_diamonds.png"


// ~~~~~~~~~~Hand Constructor~~~~~~~~~~

cards = []

class Hand {
  constructor (card) {
    this.card = card
  }

  addCard (prop) {
    cards.push({
      point: prop.point,
      suit: prop.suit
    })
  }

  getPoints () {
    var i;
    var points = 0; 
    for (i = 0; i < cards.length; i++) {
      points += cards[i].points
    }
    return points
  }
}

var myHand = new Hand()
myHand.addCard(new Card(5, 'diamonds'))
// Cards[{point: 5, suit: "diamonds"}]
myHand.addCard(new Card(13, 'spades'))
// Cards[{point: 5, suit: "diamonds"},{point: 13, suit: "spades"}]
myHand.getPoints()
// 18

// ~~~~~~~~~~Deck Constructor~~~~~~~~~~

class Deck {
  constructor () {
    this.deck = [];

    const suits = ["spades", "diamonds", "clubs", "hearts"];
    const values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];

    for(var i = 0; i < suits.length; i++) {
      for(var x = 0; x < values.length; x++) {
        var card = {point: values[x], suit: suits[i]};
        this.deck.push(card);
      }
    }
  }
  shuffle() {
    const { deck } = this;
    let m = deck.length, i;
  
    while (m) {
      i = Math.floor(Math.random() * m--);
  
      [deck[m], deck[i]] = [deck[i], deck[m]];
    }
  
    return this;
  }
  draw () {
    return this.deck.pop();
  }
  numCardsLeft () {
    return this.deck.length
  }
}

