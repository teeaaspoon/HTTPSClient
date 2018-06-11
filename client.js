var https = require("https");

function getAndPrintHTMLChunks() {
    var requestOptions = {
        host: "sytantris.github.io",
        path: "/http-examples/step1.html"
    };

    var str = "";
    https.get(requestOptions, function(response) {
        response.setEncoding("utf8");

        response.on("data", function(data) {
            str += data + "\n\n";
        });
        response.on("end", function() {
            console.log(str);
        });
    });
}

getAndPrintHTMLChunks();
