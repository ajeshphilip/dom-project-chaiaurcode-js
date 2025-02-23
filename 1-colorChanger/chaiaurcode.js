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
