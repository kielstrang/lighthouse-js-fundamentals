function range (start, end, step) {
  var range_array = [];
  if(isValidRange(start, end, step)) {
    for (var i = start; i <= end; i += step) {
      range_array.push(i);
    }
  }
  return range_array;
}

function isValidRange (start, end, step) {
  if(typeof start !== 'number' || typeof end !== 'number' || typeof step !== 'number') {
    return false;
  }
  if(isNaN(start) || isNaN(end) || isNaN(step)) {
    return false;
  }
  if (start > end) {
    return false;
  }
  if (step <= 0) {
    return false;
  }
  return true;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(5, 2, 3));
console.log(range(NaN, 1, 1));
console.log(range("strings", "don't", "work"));