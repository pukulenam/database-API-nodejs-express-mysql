const CryptoJS = require ("crypto-js");
const SHA = CryptoJS.SHA1("message");
const encrypted = SHA.toString(CryptoJS.enc.Base64);
const decrypted = CryptoJS.AES.decrypt("U2FsdGVkX180kQLWx3fjFT4aF7CjtpRtxrHgzm3g13Y=", encrypted).toString(CryptoJS.enc.Utf8);

a1 = ["localhost","root",decrypted, "bangkit"];  //using 3306
a2 = ["localhost","root","explosion", "bangkit"]; //using 5000


module.exports = {
HOST: a1[0],
USER: a1[1],
PASSWORD: a1[2],
DB: a1[3]
};