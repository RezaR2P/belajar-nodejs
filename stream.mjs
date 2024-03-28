// Stream adalah standard library untuk kontrak aliran data di NodeJS
// Ada banyak sekali Stream object di NodeJS
// Stream bisa jadi object yang bisa dibaca, atau bisa di tulis, dan Stream adalah turunan dari EventEmitter
// https://nodejs.org/dist/latest-v16.x/docs/api/stream.html

import fs from "fs";

const writter = fs.createWriteStream("target.log");
writter.write("Reza");
writter.write("Aja");
writter.close();

const reader = fs.createReadStream("target.log");
reader.on("data", (data) => {
  console.info(data.toString());
  reader.close;
});
