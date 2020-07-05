/* eslint-disable no-unused-vars */
const rand = {
  beginning: [
    ' Happiness is a choice',
    'life is what you make it',
    'life is an experiment',
    'Life is really simple',

  ],
  middle: [

    '  If you choose  not to submit to your failures',
    '  you cannot choose what happens ',
    '  make it beautiful',
    '  make it simple and cheerful',

  ],
  end: [
    ' then you will have much success in your life.',
    '  no matter where you come from  ',
    '  you will not be successsful',
    ' you chose to make it full of happiness and joy. ',

  ],
};
const randomNumber = (arr) => {
  const result = [];

  result.push(arr[Math.floor(Math.random() * arr.length)]);

  return result;
};
function generateQuote() {
  const quantityInput = document.getElementById('quantityInput');
  quantityInput.style.display = 'none';

  // eslint-disable-next-line no-undef
  deleteChild();
  const quotes = randomNumber(rand.beginning) + randomNumber(rand.middle) + randomNumber(rand.end);
  const p = document.createElement('p');
  const text = document.createTextNode(quotes);
  p.appendChild(text);
  document.getElementById('quoteDisplay').appendChild(p);
}
