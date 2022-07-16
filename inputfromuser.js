const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  readline.question(`Who are you`, age => {
    console.log(`Hi ${age}!`);
    readline.close();
  });
  

