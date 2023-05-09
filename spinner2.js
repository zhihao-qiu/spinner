process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spinner = ['|','/','-','\\','|','/','-','\\','|'];


function printSpinner(index) {
  if (index < spinner.length) {
    process.stdout.write(`\r${spinner[index]}   `);
    setTimeout(() => printSpinner(index + 1), 200);
  } else {
    console.log();
  }
}

printSpinner(0);

