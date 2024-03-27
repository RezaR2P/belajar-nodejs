// Readline merupakan standard library yang digunakan untuk membaca input
// Namun pada saat dibuat video ini, Readline hanya mendukung versi callback di versi NodeJS LTS 16.
// Di NodeJS 17 sudah mendukung Promise sehingga lebih mudah digunakan, namun itupun masih dalam tahap experimental
// https://nodejs.org/dist/latest-v16.x/docs/api/readline.html

import readline from "readline";
import process from "process";

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question("Siapa Nama Bpak Kmu?", (name) => {
  console.info(`Halo ${name}`);
  input.close();
});
