var https = require("https");

var requestOptions = {
    host: "sytantris.github.io",
    path: "/http-examples/step3.html"
};

function getAndPrintHTML(options) {
    var str = "";
    https.get(options, function(response) {
        response.setEncoding("utf8");

        response.on("data", function(data) {
            str += data + "\n";
        });
        response.on("end", function() {
            console.log(str);
        });
    });
}

getAndPrintHTML(requestOptions);
