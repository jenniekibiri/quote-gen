/* eslint-disable no-plusplus */
const funny = {

  beginning: [
    'working hard',
    'creating goals',
    'working in teams',
    'Asking for help',

  ],

  middle: [
    ' is something we do',
    ' is what we do',
    ' is what  best',
    ' is a best practise',

  ],
  end: [

    ' when we want to be successful ',
    ' when we want to achieve something',
    ' when you wanna build great product faster',
    'when you want to move faster ',

  ],

};
const life = {
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

const getMeRandomElements = (arr) => {
  const result = [];
  const quantity = Number(document.querySelector('#quantity').value);

  for (let i = 1; i <= quantity; i++) {
    result.push(arr[Math.floor(Math.random() * arr.length)]);
  }
  return result;
};

const createSentence = (quotes1, quotes2, quotes3) => {
  for (let i = 0; i < quotes1.length; i++) {
    const sentence = quotes1[i] + quotes2[i] + quotes3[i];
    const p = document.createElement('p');
    const text = document.createTextNode(sentence);
    p.appendChild(text);
    document.getElementById('quoteDisplay').appendChild(p);
  }
};

function deleteChild() {
  const e = document.getElementById('quoteDisplay');
  let first = e.firstElementChild;
  while (first) {
    first.remove();
    first = e.firstElementChild;
  }
}
function deleteErrorChild() {
  const e = document.getElementById('error');
  let first = e.firstElementChild;
  while (first) {
    first.remove();
    first = e.firstElementChild;
  }
}
function showErrorBlock() {
  const getError = document.getElementById('error');
  const p = document.createElement('p');
  p.innerHTML = `
<p class="alert col-md-6 col-lg-6 offset-lg-3 alert-danger text-center"  id="alert" role="alert">
Sorry! You can only generate 1-5 quotes
</p>
`;
  getError.appendChild(p);
  setTimeout(() => {
    document.getElementById('error').innerHTML = '';
  }, 3000);
}
// eslint-disable-next-line no-unused-vars
function generateCustomQuote() {
  const quantityInput = document.getElementById('quantityInput');
  quantityInput.style.display = 'block';
  const valueSelected = document.querySelector('#inputGroupSelect01');
  const output = valueSelected.options[valueSelected.selectedIndex].value;
  const quantity = Number(document.querySelector('#quantity').value);
  deleteErrorChild();
  if (output === '1') {
    if (quantity > 5 || quantity <= 0) {
      showErrorBlock();
    } else {
      const quotes1 = getMeRandomElements(funny.beginning);
      const quotes2 = getMeRandomElements(funny.middle);
      const quotes3 = getMeRandomElements(funny.end);
      deleteChild();
      createSentence(quotes1, quotes2, quotes3);
    }
  } else if (output === '2') {
    if (quantity > 5) {
      showErrorBlock();
    } else {
      const quotes1 = getMeRandomElements(life.beginning);
      const quotes2 = getMeRandomElements(life.middle);
      const quotes3 = getMeRandomElements(life.end);
      deleteChild();
      createSentence(quotes1, quotes2, quotes3);
    }
  } else {
    // eslint-disable-next-line no-undef
    generateQuote();
  }
}
