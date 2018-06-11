var getHTML = require("../http-functions");

var requestOptions = {
    host: "sytantris.github.io",
    path: "/http-examples/step6/1337.html"
};

function print1337(html) {
    /* Write your code here! */
    var html = html
        .replace(/er/gi, leetCharacters["er"])
        .replace(/you/gi, leetCharacters["you"])
        .replace(/a/gi, leetCharacters["a"])
        .replace(/e/gi, leetCharacters["e"])
        .replace(/l/gi, leetCharacters["l"])
        .replace(/o/gi, leetCharacters["o"])
        .replace(/s/gi, leetCharacters["s"])
        .replace(/t/gi, leetCharacters["t"])
        .replace(/ck/gi, leetCharacters["ck"]);
    console.log(html);
}

var leetCharacters = {
    a: "4",
    e: "3",
    l: "1",
    o: "0",
    s: "5",
    t: "7",
    ck: "x",
    er: "0r",
    you: "j00"
};

getHTML(requestOptions, print1337);
