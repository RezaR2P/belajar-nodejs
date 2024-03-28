// URL merupakan standard library untuk bekerja dengan URL
// https://nodejs.org/dist/latest-v16.x/docs/api/url.html

import { URL } from "url";

const instagram = new URL("https://www.instagram.com/sjhdskd/");
// contoh manipulasi dataa
instagram.host = "www.dicoding.com";
instagram.protocol = "https";
instagram.searchParams.append("status", "premium");

console.info(instagram);
console.info(instagram.href);
console.info(instagram.protocol);
console.info(instagram.host);
console.info(instagram.pathname);
console.info(instagram.searchParams);
