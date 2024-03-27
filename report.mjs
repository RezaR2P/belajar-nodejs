// Report merupakan fitur yang terdapat di NodeJS untuk membuat laporan secara otomatis dalam file ketika sesuatu terjadi pada aplikasi NodeJS kita
// https://nodejs.org/dist/latest-v16.x/docs/api/report.html

import { error } from "console";
import process from "process";

process.report.reportOnFatalError = true;
process.report.reportOnUncaughtException = true;
process.report.reportOnSignal = true;
process.report.filename = "report.json";

const sampleError = () => {
  throw new Error("Upss!");
};

sampleError();
