function calculateRectangleArea(length, width) {
  if (isValidSize(length) && isValidSize(width)) {
    return length * width;
  }
  return undefined;
}

function calculateTriangleArea(base, height) {
  if (isValidSize(base) && isValidSize(height)) {
    return base * height / 2;
  }
  return undefined;
}

function calculateCircleArea(radius) {
  if(isValidSize(radius)) {
    return Math.PI * radius * radius;
  }
  return undefined;
}

function isValidSize(val) {
  return typeof val === 'number' && val >= 0;
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined