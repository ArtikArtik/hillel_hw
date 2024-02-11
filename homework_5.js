// Завдання 1 Реалізація функції isNaN.

 function HillelisNaN(value) {
   return typeof value === 'number' && value !== value;
  }
  

  console.log(HillelisNaN(NaN));        
  console.log(HillelisNaN(42));          
  console.log(HillelisNaN(Number("42")));   
  console.log(HillelisNaN("string"));   

// Завдання 2 функціі padEnd та padStart

function pad(str, char, repeat, isStart) {
    if (repeat) {
      const targetLength = str.length + 1;
      const padString = char.repeat(targetLength);
      return isStart ? padString + str : str + padString;
    } else {
      const targetLength = str.length + (str.length < char.length ? 1 : 0);
      const padString = char.slice(0, targetLength);
      return isStart ? padString + str : str + padString;
    }
  }
  

  console.log(pad('qwerty', '+', true, false)); 
  console.log(pad('qwerty', '+', true, true));  
  console.log(pad('qwerty', '+', false, false)); 
  console.log(pad('qwerty', '++', true, true));  
  

// Завдання 3 Перевірка теорії ймовірності. 

function checkProbabilityTheory(count) {
    if (!Number.isInteger(count) || count <= 0) {
        throw new Error('Invalid input. Please provide a positive integer for count.');
    }

    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < count; i++) {
        const randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

        if (randomNumber % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    const totalNumbers = evenCount + oddCount;
    const evenPercentage = (evenCount / totalNumbers) * 100;
    const oddPercentage = (oddCount / totalNumbers) * 100;

    console.log('Кількість згенерованих чисел:', totalNumbers);
    console.log('Парних чисел:', evenCount);
    console.log('Не парних чисел:', oddCount);
    console.log('Відсоток парних до не парних:', `${evenPercentage.toFixed(2)}% : ${oddPercentage.toFixed(2)}%`);
}

// Приклад використання:
checkProbabilityTheory(1000);
