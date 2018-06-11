var getHTML = require("../http-functions");

var requestOptions = {
    host: "sytantris.github.io",
    path: "/http-examples/step6/reverse.html"
};

function printReverse(html) {
    /* Write your code here! */
    html = html
        .split("")
        .reverse()
        .join("");
    console.log(html);
}

getHTML(requestOptions, printReverse);
