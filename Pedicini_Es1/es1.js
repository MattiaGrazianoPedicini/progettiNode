import fetch from "node-fetch";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const fs = require('fs');
const conf = JSON.parse(fs.readFileSync('../conf.json'));
const token = conf.token;

function salvaDati(dati, chiaveBody, tok) {
  return new Promise((resolve, reject) => {
    fetch("https://ws.progettimolinari.it/cache/set", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        key: tok,
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
  readline.question(`Inserire dato: `, (name2) => {
    dato = name2;
    readline.close();
    console.log("---------------------------- dato: " + dato + " chiave: " + chiave);
    salvaDati(dato, chiave, token);
  });
});
