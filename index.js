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

function destrutivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  var newArray = kittens.concat(name);
}

function prependKitten(name) {
  var newArray = name.concat(kittens);
}

function removeLastKitten() {
  var newArray = array.slice(-1);
}

function removeFistKitten() {
  var newArray = array.slice(0);
}