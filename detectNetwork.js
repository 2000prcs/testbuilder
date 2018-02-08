// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// Note: `cardNumber` will always be a string
// The Diner's Club network always starts with a 38 or 39 and is 14 digits long
// The American Express network always starts with a 34 or 37 and is 15 digits long

// Once you've read this, go ahead and try to implement this function, then return to the console.

var detectNetwork = function (cardNumber) {
  var network = '';

  if (visa(cardNumber)) {
    network += 'Visa';
  } else if (masterCard(cardNumber)) {
    network += 'MasterCard';
  } else if (dinersClub(cardNumber)) {
    network += 'Diner\'s Club';
  } else if (americanExpress(cardNumber)) {
    network += 'American Express';
  } else if (discover(cardNumber)) {
    network += 'Discover';
  } else if (maestro(cardNumber)) {
    network += 'Maestro';
  } else if (chinaUnionPay(cardNumber)) {
    network += 'China UnionPay';
  } else if (switchCard(cardNumber)) {
    network += 'Switch';
  }

  return network;
};


function prefixNumber(number, digit) {
  return number.substring(0, digit);
}


function inRange(number, start, end) {
  if (number >= start && number <= end) {
    return true;
  }
  return false;
}


function visa(number) {
  var lengths = [13, 16, 19];
  if ((prefixNumber(number, 2) !== '49' && number[0] === '4') && (lengths.includes(number.length))) {
    return true;
  }
  return false;
}


function masterCard(number) {
  var prefixes = ['51', '52', '53', '54', '55'];
  if (prefixes.includes(prefixNumber(number, 2)) && number.length === 16) {
    return true;
  }
  return false;
}

function dinersClub(number) {
  var prefixes = ['38', '39'];
  if (prefixes.includes(prefixNumber(number, 2)) && number.length === 14) {
    return true;
  }
  return false;
}


function americanExpress(number) {
  var prefixes = ['34', '37'];
  if (prefixes.includes(prefixNumber(number, 2)) && number.length === 15) {
    return true;
  }
  return false;
}



function discover(number) {
  var lengths = [16, 19];
  if ((prefixNumber(number, 2) === '65' || prefixNumber(number, 4) === '6011' || inRange(parseInt(prefixNumber(number, 3)), 644, 649)) && (lengths.includes(number.length))) {
    return true;
  }
  return false;
}


function maestro(number) {
  var prefixes = ['5018', '5020', '5038', '6304'];
  if (prefixes.includes(prefixNumber(number, 4)) && inRange(number.length, 12, 19)) {
    return true;
  }
  return false;
}


function chinaUnionPay(number) {
  if (prefixNumber(number, 2) === '62' && (inRange(number.length, 16, 19))) {
    return true;
  }
  return false;
}


function switchCard(number) {
  var prefixesFourDigits = ['4903', '4905', '4911', '4936', '6333', '6759'];
  var prefixesSixDigits = ['564182', '633110'];
  var lengths = [16, 18, 19];
  if ((prefixesFourDigits.includes(prefixNumber(number, 4)) || prefixesSixDigits.includes(prefixNumber(number, 6))) && lengths.includes(number.length)) {
    return true;
  }
  return false;
}


