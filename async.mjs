function samplePromise() {
  return Promise.resolve("Hello World!");
}

//   jika kita menggunakan javascript module behavior/default nya adalah async function maka tidak perlu membuat function agar tidak error pada await
const data = await samplePromise();
console.info(data);
