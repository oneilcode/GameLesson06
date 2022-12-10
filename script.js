'use strict';

let question = +prompt('Угадай число от 1 до 100');

function game() {

   let number = 20;

   if (question == null || question == '') {
      question = alert('Игра окончена');
      console.log('Игра окончена');
      return;
   }
   if (question === number) {
      question = alert('Поздравляю, Вы угадали!!!');
      return;
   }

   if (question > number) {
      number = 20;
      question = +prompt('Загаданное число меньше, попробуйте еще раз');
      return game();
   }

   if (question < number) {
      question = +prompt('Загаданное число больше, попробуйте еще раз');
      return game();
   }

   if (question !== isNaN) {
      question = +prompt('Введи число!');
      return game();
   }
}

game();