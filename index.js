var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  var newArray = kittens.concat(name);
  return newArray;
}

function prependKitten(name) {
  var newArray = name.concat(kittens);
  return newArray;
}

function removeLastKitten() {
  var newArray = array.slice(-1);
  return newArray;
}

function removeFistKitten() {
  var newArray = array.slice(0);
  return newArray;
}