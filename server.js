var express  = require('express');
var app = express();

app.use(express.static(__dirname + '/dist'));

// serve all asset files from necessary directories
app.use("/css", express.static(__dirname + "/css"));
app.use("/img", express.static(__dirname + "/img"));
app.use("/js", express.static(__dirname + "/js"));

// serve index.html for all remaining routes, in order to leave routing up to angular
app.all("/*", function(req, res, next) {
    res.sendFile("index.html", { root: __dirname + "/dist" });
});

// listen (start app with node server.js) ======================================
app.listen(1111);
console.log("App listening on port 1111 (http://localhost.com:1111)");