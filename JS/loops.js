// Compare Two Arrays & Log Matching Values to Console

let Array1 = ['One', 'Two', 'Three'];

let Array2 = ['One', 'Four', 'Five'];

for (let Array1Index = 0; Array1Index < Array1.length; Array1Index++) 
{
  for (let Array2Index = 0; Array2Index < Array2.length; Array2Index++) 
{
    if (Array1[Array1Index] === Array2[Array2Index]) 
{
      console.log(Array2[Array2Index]);
    }
  }
}

// Flip cards until a Spade is dealt 
let cards = ['Diamond', 'Spade', 'Heart', 'Club'];

let currentCard = 'Heart';

while (currentCard !== 'Spade') {
  console.log(currentCard);
  currentCard = cards[Math.floor(Math.random() *4)];
}
console.log('You have been dealt a spade');
