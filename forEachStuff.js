const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
let abbreviations = []

days.forEach( one => {
    const newDays = one.slice(0, 2);
    abbreviations.push(newDays);
    console.log(abbreviations)
})

//NEXT challenge
const stringPrices = ['5.47', '3.12', '8.00', '5.63', '10.70'];
let priceTotal = 0;

stringPrices.forEach( one => priceTotal += parseFloat(one))

//NEXT challenge
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let noel = [];

// noel should be: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
alphabet.forEach( one => {
  if ( one === 'L' ) {
    alphabet.shift(one);
  } else {
  noel.push(one);
  }
})

//NEXT challenge
const percentages = [34, 67, 12, 39, 90, 82, 22, 24, 99]
let upperRange = []

//upperRange should be [67, 90, 82, 99]
percentages.forEach( number => {
    if (number > 50) {
        upperRange.push(number)
    }
})

//NEXT challenge
const colors = ['#87E2D0', '#559F4D', '#FFE0F4', '#7E7E7E', '#FF2D2D', '#F7FFEC'];
let filteredColors = [];

// filteredColors should be: ['#FFE0F4', '#FF2D2D', '#F7FFEC']
colors.forEach( hex => {
    if (hex.startsWith("#F") === true) {
        filteredColors.push(hex)
    }
})

const months = ['january', 'february', 'march', 'april', 'may'];
let capitalizedMonths = [];

// filteredColors should be: ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY']
months.forEach(month => {
    capitalizedMonths.push(month.toUpperCase())
})