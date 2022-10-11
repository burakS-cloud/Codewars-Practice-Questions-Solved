// Write a function that will return the count of distinct case-insensitive alphabetic
//  characters and numeric digits that occur more than once in the input string.
//   The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

//This question was tough, had to look up how to convert objects to arrays.
//But I'm quite happy with the end result.

function duplicateCount(text) {
  //...
  let obj = {};
  for (let i = 0; i < text.length; i++) {
    if (text[i].toUpperCase() in obj === false) {
      obj[text[i].toUpperCase()] = text[i].toLowerCase();
      continue;
    }
    if (text[i].toUpperCase() in obj === true) {
      obj[text[i].toUpperCase()] += text[i].toLowerCase();
      continue;
    }
  }
  const asArray = Object.entries(obj);
  const filtered = asArray.filter(([key, value]) => value.length >= 2);

  return filtered.length;
}
