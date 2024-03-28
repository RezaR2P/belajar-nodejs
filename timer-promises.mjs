import timers from "timers/promises";
// console.info(new Date());
// const name = await timers.setTimeout(1000, "reza");
// console.info(new Date());
// console.info(name);

// timers promises yg benar
for await (const startTime of timers.setInterval(1000)) {
  console.info(`Start Time at ${new Date()}`);
}
