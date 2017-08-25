function merge (first_array, second_array) {
  var first_index = 0;
  var second_index = 0;

  var merged_array = [];

  while(first_index < first_array.length || second_index < second_array.length) {
    if (second_index >= second_array.length || first_array[first_index] < second_array[second_index]) {
      merged_array.push(first_array[first_index]);
      first_index++;
    }
    else {
      merged_array.push(second_array[second_index]);
      second_index++;
    }
  }
  return merged_array;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);