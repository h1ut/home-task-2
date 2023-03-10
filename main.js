const redButton = document.querySelector('.red');
const yellowButton = document.querySelector('.yellow');
const greenButton = document.querySelector('.green');
const resetButton = document.querySelector('.reset');

redButton.addEventListener('click', () => {
  document.body.style.backgroundColor = 'red';
  console.log('Red');
  counter++;
  if (counter < 10) {
    setTimeout(() => {
      document.body.style.backgroundColor = 'yellow';
      console.log('Paint it yellow');
    }, 2000);
  }
});

yellowButton.addEventListener('click', () =>{
  document.body.style.backgroundColor = 'yellow';
  console.log('Yellow');
  counter++;
  if (counter < 10) {
    setTimeout(() => {
      document.body.style.backgroundColor = 'green';
      console.log('Paint it green');
    }, 2000);
  }
});


greenButton.addEventListener('click', () => {
  document.body.style.backgroundColor = 'green';
  console.log('Green');
  counter++;
  if (counter < 10) {
    setTimeout(() => {
      document.body.style.backgroundColor = 'red';
      console.log('Paint it red');
    }, 2000);
  }
});

resetButton.addEventListener('click', () => {
  document.body.style.backgroundColor = 'white';
  console.log('Reset');
  counter = 0;
});