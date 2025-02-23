// 1st Project JS
buttons = document.querySelectorAll('.button');
body = document.querySelector('body')
buttons.forEach(function (button) {
  // console.log(button);
  button.addEventListener('click', function (e) {
    // console.log(e);
    // console.log(e.target);
    console.log(e.target.id)
    // if (e.target.id === 'grey')
    // {
      body.style.backgroundColor = e.target.id
    // }
  });
});

// 2nd Project JS
const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height < 0 || isNaN(height) || height === '') {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight < 0 || isNaN(weight) || weight === '') {
    weight.innerHTML = `Please give a valid height ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
// 3rd Project JS