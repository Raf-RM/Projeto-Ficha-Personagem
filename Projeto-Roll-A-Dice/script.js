const d4Dice = document.querySelector('#d4')
const d6Dice = document.querySelector('#d6')
const d8Dice = document.querySelector('#d8')
const d10Dice = document.querySelector('#d10')
const d12Dice = document.querySelector('#d12')
const d20Dice = document.querySelector('#d20')
const d100Dice = document.querySelector('#d100')

d4Dice.addEventListener('click', function () {
  randomNumber = Math.random()
  console.log(Math.ceil(Math.random() * 4))
} )

d6Dice.addEventListener('click', function () {
  randomNumber = Math.random()
  console.log(Math.ceil(Math.random() * 6))
} )

d8Dice.addEventListener('click', function () {
  randomNumber = Math.random()
  console.log(Math.ceil(Math.random() * 8))
} )

d10Dice.addEventListener('click', function () {
  randomNumber = Math.random()
  console.log(Math.ceil(Math.random() * 10))
} )

d12Dice.addEventListener('click', function () {
  randomNumber = Math.random()
  console.log(Math.ceil(Math.random() * 12))
} )

d20Dice.addEventListener('click', function () {
  randomNumber = Math.random()
  console.log(Math.ceil(Math.random() * 20))
} )

d100Dice.addEventListener('click', function () {
  randomNumber = Math.random()
  console.log(Math.ceil(Math.random() * 100))
} )

function rollADice(diceFaces) {
  randomNumber = Math.random()
  console.log(Math.ceil(Math.random() * diceFaces))
} 