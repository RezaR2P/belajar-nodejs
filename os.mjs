// OS merupakan standard library yang bisa digunakan untuk mendapatkan informasi tentang sistem operasi yang digunakan
// https://nodejs.org/dist/latest-v16.x/docs/api/os.html

import os from "os";

console.info(os.platform());
console.info(os.arch());
console.table(os.cpus());
console.info(os.uptime());
console.info(os.totalmem());
console.info(os.freemem());
console.table(os.networkInterfaces());
