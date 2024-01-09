const fs= require(`fs`);
fs.readFile("660000_parole_italiane.txt", (error, data) =>{
if (error) {
throw error;
}
console.log(data.toString());
});

const readline = require(`readline`).createInterface({
    input: process.stdin,
    output: process.stdout,
  });

readline.question(`Inserire numero: `, (n) => {
    
    readline.close();
  });
