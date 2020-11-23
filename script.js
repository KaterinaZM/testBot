let ask = document.getElementById('myButton');
// console.log(ask)
ask.addEventListener('click', function() {
  let text = document.getElementById('question').value.toLowerCase();
  console.log(text);

  let myQ = document.createElement('p')
  myQ.innerText = text;
  let answerSection = document.getElementById('answer');
  answerSection.appendChild(myQ);

    let botAnswer = document.createElement('div')
  // botAnswer.innerText = text;

  answerSection.appendChild(botAnswer);

  switch (text) {
    case 'elbrus':
    botAnswer.innerText = 'Elbrus Coding Bootcamp';
    break;
    case 'js':
    botAnswer.innerText = 'Хочешь научиться программировать?';
    break;
    default:
     botAnswer.innerText = 'Я тебя не понимать(';
  }

})