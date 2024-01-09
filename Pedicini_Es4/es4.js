function fibonacci(n, ora = 0, dopo = 1, risultato = [1]) {
    if (n <= 1) {
        return setImmediate(() => console.log(risultato));
    }

    const somma = ora + dopo;
    risultato.push(somma);

    setImmediate(() => fibonacci(n - 1, dopo, somma, risultato));
}

const readline = require(`readline`).createInterface({
    input: process.stdin,
    output: process.stdout,
  });

readline.question(`Inserire numero: `, (n) => {
    fibonacci(n);
    readline.close();
  });


