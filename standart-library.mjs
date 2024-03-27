// Saat kita belajar JavaScript, di Web Browser, terdapat fitur-fitur yang bernama Web API
// https://developer.mozilla.org/en-US/docs/Web/API
// Kebanyakan fitur Web API hanya berjalan di Web Browser, sehingga tidak bisa jalan di NodeJS
// NodeJS sendiri hanya menggunakan bahasa pemrogaman JavaScript nya, namun tidak mengadopsi fitur Web API nya, karena itu hanya berjalan di Web Browser
// NodeJS sendiri memiliki standard library yang bisa kita gunakan untuk mempermudah pembuatan aplikasi
// https://nodejs.org/dist/latest-v16.x/docs/api/

// Standard Library yang terdapat di NodeJS bisa kita gunakan seperti layaknya JavaScript Modules
// Jika belum mengerti tentang JavaScript Modules, silahkan pelajari kelas saya tentang JavaScript Modules
// Karena NodeJS menggunakan Modules, jika kita ingin menggunakan Modules, kita juga perlu memberi tahu bahwa file JavaScript kita menggunakan Modules, caranya dengan mengubah nama file dari .js menjadi .mjs

import os from "os";

console.info(os.platform());
console.table(os.cpus());
