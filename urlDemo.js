import url from 'url';
const urlString = 'https://www.google.com/search?q=hello+world';

/// url obkect using url constructor 
const urlConst = new URL(urlString);
// console.log(urlConst);

// format -- put back in the string format 
// console.log(url.format(urlConst)); 

// meta .url
console.log(import.meta.url);
// fileURLTOPath gives only the path without file:// protocol
