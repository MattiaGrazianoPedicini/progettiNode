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

/**
 * F[0] = 1
 * F[1] = 1
 * F[N] = F[N-2] + F[N-3]
 *
 * const n=10;
 * function fibonacci(n){
 * let F = [];
 * if(n===2){
 * F=[1,1];
 * }else{
 * F=fibonacci(n-1);
 * F.push(F[n-2]+F[n-3]);
 * }
 * return F;
 * }
 */
