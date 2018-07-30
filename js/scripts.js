let max = wordList.length;

function randomizer(max) {
  const index = Math.floor(Math.random() * Math.floor(max));
  const currentCard = wordList[index];
  const guessMe = currentCard.guessMe;
  document.getElementById("guess-word").innerHTML = guessMe;
  const tabooWords = currentCard.taboo;
  const wordsList = document.getElementById("words-list");
  // Clear existing list of "taboo" words
  const doNotSay = document.getElementsByClassName("do-not-say");
  while (doNotSay.length > 0) {
    doNotSay[0].parentNode.removeChild(doNotSay[0]);
  }
  // Add new list of "taboo" words
  tabooWords.forEach(el => {
    let li = document.createElement("li");
    li.className = "do-not-say";
    wordsList.append(li);
    li.append(el);
  });
};
