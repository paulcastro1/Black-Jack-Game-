let firstCard = 10;
let secondCard = 7;
let cards = [firstCard, secondCard]; // Keep track of all the cards
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true; // Track if the player is still in the game
let message = "";

function startGame() {
    renderGame();
}

function renderGame() {
    sum = calculateSum(cards);
    
    if (sum <= 20) {
        message = "Do you want to draw a card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out!";
        isAlive = false;
    }
    
    console.log("Cards: " + cards);
    console.log("Sum: " + sum);
    console.log(message);
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}

function calculateSum(cardsArray) {
    let sum = 0;
    for (let i = 0; i < cardsArray.length; i++) {
        sum += cardsArray[i];
    }
    return sum;
}

function getRandomCard() {
    // Returns a random card value between 2 and 11
    let card = Math.floor(Math.random() * 9) + 2;
    return card;
}

// Call startGame() to initiate the game
startGame();
