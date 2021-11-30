let firstCard = 10
let secondCard = 7
let sum = firstCard + secondCard + 4
let hasBlackJack = false
let message = ""

if (sum <= 20 ) {
    message = "do you want to draw a card?"
    

}else if( sum === 21) {
    message = "you've got blackjack"
    hasBlackJack = true
}else{
    message = "you are out."
   
}
console.log(hasBlackJack)

console.log(message)