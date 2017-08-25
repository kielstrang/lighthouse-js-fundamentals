function loopyLighthouse(range, multiples, words) {
  if(multiples.length !== words.length) {
    console.log('Mismatched input lengths!');
    return;
  }

  for (var i = range[0]; i <= range[1]; i++) {

    var print = '';
    for (var j = 0; j < multiples.length; j++) {
      var multiple = multiples[j];
      var word = words[j];

      if(i % multiple === 0) {
        print += word;
      }
    }

    if(print) {
      console.log(print);
    }
    else {
      console.log(i);
    }

  }
}

loopyLighthouse([1,30], [3,4], ["Batty", "Beacon"]);