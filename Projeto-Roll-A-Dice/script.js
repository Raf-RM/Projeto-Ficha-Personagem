const d4Dice = document.querySelector('#d4')
const d6Dice = document.querySelector('#d6')
const d8Dice = document.querySelector('#d8')
const d10Dice = document.querySelector('#d10')
const d12Dice = document.querySelector('#d12')
const d20Dice = document.querySelector('#d20')
const d100Dice = document.querySelector('#d100')

const result = document.querySelector(".screen2 h2")

d4Dice.addEventListener('click', function () {
  randomNumber = Math.ceil(Math.random() * 4)
  result.innerHTML = randomNumber
} )

d6Dice.addEventListener('click', function () {
  randomNumber = Math.ceil(Math.random() * 6)
  result.innerHTML = randomNumber
} )

d8Dice.addEventListener('click', function () {
  randomNumber = Math.ceil(Math.random() * 8)
  result.innerHTML = randomNumber
} )

d10Dice.addEventListener('click', function () {
  randomNumber = Math.ceil(Math.random() * 10)
  result.innerHTML = randomNumber
} )

d12Dice.addEventListener('click', function () {
  randomNumber = Math.ceil(Math.random() * 12)
  result.innerHTML = randomNumber
} )

d20Dice.addEventListener('click', function () {
  randomNumber = Math.ceil(Math.random() * 20)
  result.innerHTML = randomNumber
} )

d100Dice.addEventListener('click', function () {
  randomNumber = Math.ceil(Math.random() * 100)
  result.innerHTML = randomNumber
} )

function rollADice(diceFaces) {
  randomNumber = Math.random()
  console.log(Math.ceil(Math.random() * diceFaces))
} 