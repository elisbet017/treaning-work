// 1. написати скрипт, де будуть виводитися всі числа від 1 до 100
for (let i = 1; i <= 100; i += 1) {

  if (i % 5 === 0 && i % 3 === 0) {
    console.log("FizzBuzz");
  } else if (i % 5 === 0 && i % 3 !== 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else console.log(i);
}
// 2. коли число ділиться на 3 - виводити Fizz
// 3. коли число ділиться на 5, але не на 3 - виводити Buzz
// 4. якщо ділиться і на 3 і на 5, то виводити FizzBuzz
