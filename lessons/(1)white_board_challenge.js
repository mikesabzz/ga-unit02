// How to find a unique character in a string

function findUnique(string) {
  let empty = {};
  for (let i = 0; i < string.length; i++) {
    if (empty[string[i]] === undefined) {
      empty[string[i]] = 1;
    } else {
      empty[string[i]]++;
    }
  }
  let keys = Object.keys(empty);
  for (let i = 0; i < keys.length; i++) {
    if (empty[keys[i]] === 1) {
      return [keys[i]];
    }
  }
}