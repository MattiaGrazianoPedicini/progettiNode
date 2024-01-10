const fs = require(`fs`);
let vocabolario = [];
fs.readFile("660000_parole_italiane.txt", (error, data) => {
  if (error) {
    throw error;
  }
  vocabolario = data.toString().split("\n");
});

function cercaRima(listaParole, parola) {
  const risultato = [];
  const rima = parola.substring(parola.length - 3);
  for (let i = 0; i < listaParole.length; i++) {
    if (listaParole[i].substring(listaParole[i].length - 3) === rima) {
      risultato.push(listaParole[i]);
    }
  }
  return risultato;
}

const readline = require(`readline`).createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Inserire parola: `, (n) => {
  console.log(cercaRima(vocabolario, n));
  readline.close();
});
