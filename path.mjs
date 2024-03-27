// Path merupakan standard library yang bisa kita gunakan untuk bekerja dengan lokasi file dan directory / folder
// https://nodejs.org/dist/latest-v16.x/docs/api/path.html

import path from "path";

const file = "\0-rezaNODEJS";
console.info(path.dirname(file));
console.info(path.basename(file));
console.info(path.extname(file));
console.info(path.parse(file));
