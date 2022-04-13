const alarm = function(input) {
  let alarmTimes = input.slice(2); //remove unnecessary elements from array

  alarmTimes = alarmTimes.map(x => Number(x)) //convert all times to numbers

  for (const time of alarmTimes) {
    if (time < 0 || isNaN(time)) continue; //skip if time is less than zero or NaN
    
    setTimeout(() => {
      process.stdout.write('\x07');

    }, time * 1000)
  }
}

alarm(process.argv);