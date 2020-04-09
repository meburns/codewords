const nouns = require('./nouns.js')

function newIdentity() {
  return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
}

function newSecrets(a) {
  // Decide whose turn it is
  const blueTurn = Math.random() >= 0.5;
  // Clone the array and shuffle it again
  const b = shuffle(a.slice());
  let blue = [];
  let red = [];

  // Give 9 and 8 shuffled values to each team
  if (blueTurn) {
    blue = b.slice(0, 9)
    red = b.slice(10, 18)
  } else {
    red = b.slice(0, 9)
    blue = b.slice(10, 18)
  }
  // Always give death a single field
  let death = b.slice(24, 25);

  return (
    {
      turn: blueTurn ? "blue" : "red",
      blue: blue,
      red: red,
      death: death
    }
  );
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}

exports.newGame = () => {
  let sarr = shuffle(nouns.getNouns())
  let arr = []
  for (let i=0; i<26; i++) {
    arr[i] = sarr[i];
  }

  return (
    { identity: newIdentity(), words: arr, secrets: newSecrets(arr) }
  );
}
