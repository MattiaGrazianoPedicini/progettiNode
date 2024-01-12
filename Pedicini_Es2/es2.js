import fetch from "node-fetch";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const fs = require('fs');
const conf = JSON.parse(fs.readFileSync('../conf.json'));
const token = conf.token;

function recuperaDati(chiaveBody, tok){
    return new Promise((resolve, reject) => {
      fetch("https://ws.progettimolinari.it/cache/get", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "key": tok
        },
        body: JSON.stringify({ key: chiaveBody })
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Errore durante il recupero.');
        })
        .then(data => {
          console.log('Dati recuperati dalla cache remota:', JSON.parse(data.result));
          resolve(JSON.parse(data.result));
        })
        .catch(error => {
          reject(error);
        });
    });
  };

let utente = "";
let pass = "";

const readline = require(`readline`).createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Inserire utente: `, (name) => {
    utente = name;
  readline.question(`Inserire password: `, (name2) => {
    pass = name2;
    readline.close();
    recuperaDati(utente, token).then((response) => {
        if (response===pass) {
            console.log("Utente loggato");
        }else{
            console.log("Utente non presente");
        }
      });
    
  });
});


