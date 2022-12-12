'use strict';

let question = +prompt('Угадай число от 1 до 100');
let count = 10;

function game() {

   let number = 20;

   if (question === number) {
      question = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
      if (question == true) {
         count = 11;
         question = +prompt('Введи число!'); //добавила эту функцию и все теперь работает, хотя думаю, что это не самый лучший способ :(
         return game();

      } else {
         question = alert('Игра окончена');
         console.log('Игра окончена');
         return;
      }
   }
   if (count == 1) {
      confirm('Попытки закончились, хотите сыграть еще?');
      if (question == null || question == '') {
         question = alert('Игра окончена');
         console.log('Игра окончена');
         return;
      } else {
         count = 11;
         game();
      }
   }

   if (question == null || question == '') {
      question = alert('Игра окончена, прощайте');
      console.log('Игра окончена');
      return;
   }

   count--;

   if (question > number) {
      number = 20;
      question = +prompt('Загаданное число меньше, осталось попыток  ' + count + ' Попробуйте еще раз');
      return game();
   }
   if (question < number) {
      question = +prompt('Загаданное число больше, осталось попыток ' + count + ' Попробуйте еще раз');
      return game();
   }

   if (question !== isNaN) {
      question = +prompt('Введи число!');
      game();
   }
}

game();