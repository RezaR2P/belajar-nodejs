// Timer merupakan standard library untuk melakukan scheduling
// Function di Timer terdapat di globals, sehingga kita bisa menggunakannya tanpa melakukan import, namun semua function Timer menggunakan Callback
// Jika kita ingin menggunakan Timer versi Promise, kita bisa meng-import dari module timer/promise
// https://nodejs.org/dist/latest-v16.x/docs/api/timers.html

setInterval(() => {
  console.info(`Start time at ${new Date()}`);
}, 1000);
