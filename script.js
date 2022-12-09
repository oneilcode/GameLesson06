'use strict';
let question = +prompt('Угадай число от 1 до 100');


function checkNull() {

   let number = 20;

   if (question == null || question == '') {
      question = alert('Игра окончена');
      console.log('Игра окончена');
      return;
   }

   if (question > number) {
      number = 20;
      question = +prompt('Загаданное число меньше, попробуйте еще раз');
      checkNull();
   } else if (question < number) {
      question = +prompt('Загаданное число больше, попробуйте еще раз');
      checkNull();
   } else if (question === number) {
      question = alert('Поздравляю, Вы угадали!!!');
      return question;
   } else if (question !== isNaN) {
      question = +prompt('Введи число!');
      checkNull();
   }
}

checkNull();