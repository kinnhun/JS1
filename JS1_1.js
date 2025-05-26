const readline = require('readline');

function sum(a, b) {
  return a + b;
}

// Nếu file được chạy trực tiếp từ dòng lệnh
if (require.main === module) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter the first number: ', (input1) => {
    rl.question('Enter the second number: ', (input2) => {
      const num1 = parseFloat(input1);
      const num2 = parseFloat(input2);

      if (isNaN(num1) || isNaN(num2)) {
        console.log("Invalid input. Please enter valid numbers.");
      } else {
        console.log(`✅ The sum is: ${sum(num1, num2)}`);
      }

      rl.close();
    });
  });
}

// Export để có thể test
module.exports = sum;
