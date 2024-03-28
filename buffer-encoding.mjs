// Buffer juga bisa digunakan untuk melakukan encoding dari satu encoding ke encoding yang lain
// Ada banyak encoding yang didukung oleh Buffer, misal utf8, ascii,  hex, base64, base64url dan lain-lain

const buffer = Buffer.from("Reza", "utf8");
console.info(buffer);
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));
console.info(buffer.toString("base64url"));

const buffer2 = Buffer.from("UmV6YQ==", "base64");
console.info(buffer2.toString("utf8"));
