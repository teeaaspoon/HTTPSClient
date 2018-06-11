var https = require("https");
var httpFunctions = {};

httpFunctions["getHTML"] = function(options, callback) {
    https.get(options, function(response) {
        response.setEncoding("utf8");
        var str = "";

        response.on("data", function(data) {
            str += data;
        });

        response.on("end", function() {
            callback(str);
        });
    });
};

httpFunctions["printHTML"] = function(html) {
    console.log(html);
};

module.exports = httpFunctions;
