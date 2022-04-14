const stdin = process.stdin;
const stdout = process.stdout;

stdin.setRawMode(true);
stdin.setEncoding('utf8');


const alarm = function(key) {
  //check if key is between 1 and 9 (inclusive)
  if (Number(key) >= 1 && Number(key) <= 9) {
    console.log(`\nSettting a timer for ${key} seconds...`);

    //set timer
    setTimeout(() => {
      process.stdout.write('\x07'); //beep
    }, key * 1000);

  } else if (key !== 'b') {
    console.log('\nNot a valid entry!'); //print error message
  }
};

//prompt user for entry
stdout.write('\nEnter a number between 1 - 9, or press b to beep: ');

stdin.on('data', (key) => {
  stdout.write(key);
  if (key === '\u0003') {
    stdout.write(`Thanks for using me, ciao!\n`);
    process.exit();       //exit using crtl+c
  }
  if (key === 'b') stdout.write('\r\x07\n');  //beep right away
  alarm(key);
});
