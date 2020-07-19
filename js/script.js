let inputRange = null;
let inputText = null;

function changeSquareColor(rValue, gValue, bValue) {
  const square = document.querySelector('.square');
  square.style.backgroundColor = `rgb(${rValue}, ${gValue}, ${bValue})`;
}

window.addEventListener('load', () => {
  inputRangeR = document.querySelector('#inputRangeR');
  inputRangeG = document.querySelector('#inputRangeG');
  inputRangeB = document.querySelector('#inputRangeB');

  inputTextR = document.querySelector('#inputTextR');
  inputTextG = document.querySelector('#inputTextG');
  inputTextB = document.querySelector('#inputTextB');

  inputTextR.value = inputRangeR.value;
  inputTextG.value = inputRangeG.value;
  inputTextB.value = inputRangeB.value;

  function updateSquareColor() {
    changeSquareColor(inputRangeR.value, inputRangeG.value, inputRangeB.value);
  }

  inputRangeR.addEventListener('input', (event) => {
    inputTextR.value = event.target.value;
    updateSquareColor();
  });

  inputRangeG.addEventListener('input', (event) => {
    inputTextG.value = event.target.value;
    updateSquareColor();
  });

  inputRangeB.addEventListener('input', (event) => {
    inputTextB.value = event.target.value;
    updateSquareColor();
  });
});
