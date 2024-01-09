function salvaDati(dati, chiaveBody) {
  return new Promise((resolve, reject) => {
    fetch("https://ws.progettimolinari.it/cache/set", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        key: "30b2faf6-1887-445f-b1d8-d4b7aa30bb89",
      },
      body: JSON.stringify({
        key: chiaveBody,
        value: JSON.stringify(dati),
      }),
    })
      .then((response) => {
        if (response.ok) {
          resolve("Dati caricati con successo.");
        } else {
          throw new Error("Errore durante il caricamento.");
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}

let chiave = "";
let dato = "";

const readline = require(`readline`).createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Inserire chiave: `, (name) => {
  chiave = name;
  console.log(`chiave inserita: ${name}`);
  readline.question(`Inserire dato: `, (name2) => {
    dato = name2;
    console.log(`dato inserito: ${name2}`);
    readline.close();
  });
});
//salvaDati(dato, chiave);

