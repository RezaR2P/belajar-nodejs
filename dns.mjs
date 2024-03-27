// DNS merupakan standard library yang bisa digunakan untuk bekerja dengan DNS (domain name server)
// https://nodejs.org/dist/latest-v16.x/docs/api/dns.html
// menggunakan dns promises ada versi callbacknya juga tapi ribet dan pusing
import dns from "dns/promises";
const lookup = await dns.lookup("www.google.com");
console.info(lookup.family);
console.info(lookup.address);
