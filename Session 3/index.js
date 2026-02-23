let num = 0,
  totalSum = 0,
  evenNumbersIncrements = 0,
  oddNumbersIncrements = 0;

num = window.prompt("Please enter a number");

for (let i = 1; i <= num; i++) {
  console.log(i);
  totalSum += i;
  i % 2 === 0 ? evenNumbersIncrements++ : oddNumbersIncrements++;
}

console.log(
  "Total sum: " +
    totalSum +
    "\n" +
    "Odd number quantity: " +
    oddNumbersIncrements +
    "\n" +
    "Even number quantity: " +
    evenNumbersIncrements,
);
