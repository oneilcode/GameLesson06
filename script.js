'use strict';

let question = +prompt('Угадай число от 1 до 100');
let count = 10;

function game() {

   let number = 20;

   if (count == 1) {
      confirm('Попытки закончились, хотите сыграть еще?');
      if (question == null) {
         question = alert('Игра окончена');
         return;
      } else {
         count = 11;
         game();
      }
   }

   if (question == null || question == '') {
      question = alert('Игра окончена');
      console.log('Игра окончена');
      return;
   }

   count--;

   if (question > number) {
      number = 20;
      question = +prompt('Загаданное число меньше, осталось попыток  ' + count + ' Попробуйте еще раз');
      game();
   } else if (question < number) {
      question = +prompt('Загаданное число больше, осталось попыток ' + count + ' Попробуйте еще раз');
      game();
   } else if (question === number) { //вот тут что-то не так ПОМОГИТЕ =(
      question = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
      if (question == null) {
         question = alert('Игра окончена');
         console.log('Игра окончена');
      } else {
         count = 11;
         game();
      }
      return question;
   } else if (question !== isNaN) {
      question = +prompt('Введи число!');
      game();
   }
}

game();