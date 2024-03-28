// Util adalah standard library yang berisikan utility-utility yang bisa kita gunakan untuk mempermudah pembuatan kode program di NodeJS
// https://nodejs.org/dist/latest-v16.x/docs/api/util.html

import util from "util";
const firstname = "reza";
const lastname = "aja";
console.info(`Hello ${firstname} ${lastname}`);
console.info(util.format("Hello %s %s", firstname, lastname));

const person = {
  firstname: "reza",
  lastname: "aja",
};

console.info(`Person : ${JSON.stringify(person)}`);
console.info(util.format("Person : %j", person));
