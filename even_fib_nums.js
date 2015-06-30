/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
module.exports = {
  sumFibs: _sumFibs,
  highestFibonacciNumber: _highestFibonacciNumber
};

function _sumFibs(maxFibValue) {
  if (typeof maxFibValue !== 'number') {
    throw new TypeError('Invalid input');
  }
  var counter = 0;
  var sum = 0;
  var last = 0;
  var next = 0;
  var current = 1;
  var fibArr = [];

  function generateFibValues() {

    if (next < maxFibValue) {
      next = last + current;
      fibArr.push(next);
      last = current;
      current = next;
      generateFibValues();
    }
    return fibArr;
  }

  var fibArr = generateFibValues();

  var fibEvenArr = fibArr.filter(function(current) {
    return current % 2 === 0;
  });

  for (var i = 0; i < fibEvenArr.length; i++) {
    sum += fibEvenArr[i];
  }


  return sum;
};


// bonus round
function _highestFibonacciNumber(maxFibValue) {
  var counter = 0;
  var sum = 0;
  var last = 0;
  var next = 0;
  var current = 1;
  var fibArr = [];


  function generateFibValues() {

    if (next < maxFibValue) {
      console.log('last', last);
      console.log('current', current);
      next = last + current;
      console.log('next', next);
      fibArr.push(next);
      last = current;
      current = next;
      generateFibValues();
    }
    return fibArr;
  }
  var fibArr = generateFibValues();
  var fibHighest = fibArr.filter(function(current){
    return current <= maxFibValue;
  });

  var length = fibHighest.length;
  highest = fibHighest[length - 1];
  return highest;
};