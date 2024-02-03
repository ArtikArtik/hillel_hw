// імпортуємо бібліотеку промт
var prompt = require('prompt');

// Виводемо повідомлення у командній строці терміналу.
prompt.message = 'Введіть ваш вік';

// Викликаємо функцію getUserAge, яка відповідає за отримання та обробку віку користувача
// Викликаємо метод start для prompt
function getUserAge() {
  prompt.start();

  // Викликаємо метод get для отримання віку користувача
  prompt.get(['age'], (err, result) => {
    if (err) {
      console.error('Помилка введення:', err.message);
      return;
    }

    // Функція toLowerCase автоматично конвертує регістр у малі літери, це для команди stop та exit
    // Якщо користувач ввів stop або exit, програма припиняє виконання
    var userAge = result.age.toLowerCase();

    if (userAge === 'stop' || userAge === 'exit') {
      console.log('До нових зустрічей!');
      prompt.stop();
      return;
    }

    // Перевіряємо, що введені дані є числом від 1 до 100
    if (!isNaN(userAge) && userAge >= 1 && userAge <= 100) {
      // Cтворюємо змінну, яка по замовчанню додає до усіх випадків віку від 1 до 100 суфікс "років"
      var ageSuffix = 'років';

      // Суфікс "рік" - якщо введений вік закінчується на 1, але не є 11, додається суфікс "рік"
      if ((userAge % 10 === 1) && (userAge % 100 !== 11)) {
        ageSuffix = 'рік';
      } else if ((userAge % 10 >= 2 && userAge % 10 <= 4) && (userAge % 100 < 12 || userAge % 100 > 14)) {
        // Суфікс "роки" - якщо введений вік закінчується на 2, 3, 4 (окрім випадків з віком 12, 13, 14)
        ageSuffix = 'роки';
      }

      // Виводимо користувачу опрацьовану відповідь, "тобі" "число" "суфікс" в залежності від введених даних
      console.log(`Тобі ${userAge} ${ageSuffix}`);

      // Програма повторно викликає сама себе після відображення інформації користувачеві, для того щоб можна було працювати у ній далі
      // Так буде, доки користувач замість віку не введе stop або exit
      getUserAge();
    } else {
      // Якщо користувач ввів невірні дані, відображаємо відповідне повідомлення та знову викликаємо функцію getUserAge()
      console.log('Будь ласка, введіть свій справжній вік :)');
      getUserAge();
    }
  });
}
// Початковий виклик для запуску програми
getUserAge();
