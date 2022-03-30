var lines = [
  // Credits to ster, gamingmedley, darkness3560, JettTheMedic, and many other redditors
  "Speaks more than 2 languages",
  "Lives in a warm environment",
  "Has 10+ years of experience in their field",
  "Has traveled to more than 5 countries",
  "Has watched the tv show The Marvelous Mrs. Maisel on Amazon Prime",
  "Has more than 3 animals",
  "Is afraid of heights",
  "Favorite color is Yellow",
  "Doesn't like chocolate",
  "Plays soccer/futball",
  "Plays an instrument",
  "Owns an Amazon device (Alexa, Ring, Kindle, etc)",
  "FREE SPACE",
  "Is an only child",
  "Is left handed",
  "Has run a marathon",
  "Collects something",
  "Favorite food is pizza",
  "Prefers to stay up late",
  "Likes video games",
  "Orders from Amazon at least once a month",
  "Has blue eyes",
  "Was born in a different country then where they currently live",
  "Has a twin",
  "Met a celebrity",
];

// Fisher-Yates Shuffle
var shuffle = function(array) {
  var m = array.length, t, i;
  // While there remain elements to shuffle
  while (m) {
    // Pick a remaining element
    i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
};

// Did I just steal this code from Wikipedia, or something?
/*
var insertToCard = function(array) {
  var slot = 25;
  while (slot) {
    $("label:nth-child(" + slot + ") .mark span").text(array[slot + 1]);
    slot--;
  }
};
*/

$(document).ready(function() {
  var shuffledLines = shuffle(lines);
  insertToCard(shuffledLines); // #hellaswag
  $("#seed").text(Math.floor(Math.random() * 100000000)); // TODO
});
