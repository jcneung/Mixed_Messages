// Start 
const startPhrases = [
   "This week,",
   "Today,",
   "In the coming days,",
   "Soon,",
   "The stars suggest that",
   "The universe reveals that",
   "Your energies point towards"
];

// Middle
const eventPhrases = [
   "a mysterious encounter",
   "an unexpected change",
   "a stroke of luck",
   "a challenge",
   "a surprise",
   "a moment of clarity",
   "an exciting proposition",
   "a fortuitous meeting"
];

// End
const guidancePhrases = [
   "will reshape your perspective.",
   "brings new opportunities.",
   "will test your patience.",
   "will enlighten your spirit.",
   "ushers in joy and happiness.",
   "needs your full attention.",
   "will introduce you to new experiences.",
   "can be a game-changer."
];

function genMessage() {
   const s = Math.floor(Math.random() * startPhrases.length);
   const m = Math.floor(Math.random() * eventPhrases.length);
   const e = Math.floor(Math.random() * guidancePhrases.length);

   document.getElementById("message-display").innerHTML = startPhrases[s] + ' ' + eventPhrases[m] + ' ' + guidancePhrases[e];
}