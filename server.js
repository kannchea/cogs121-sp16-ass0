// Node.js Dependencies
const http = require("http");
const path = require("path");
const express = require("express");
const handlebars = require("express-handlebars");

var app = express();

var router = {
    index: require("./routes/index")
};

var parser = {
    body: require("body-parser")
};

// // Database Connection
// var db = mongoose.connection;
// mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://127.0.0.1/cogs121');
// db.on('error', console.error.bind(console, 'Mongo DB Connection Error:'));
// db.once('open', function(callback) {
//     console.log("Database connected successfully.");
// });

// Middleware
app.set("port", process.env.PORT || 3000);
app.engine("html", handlebars());
app.set("view engine", "html");
app.set("views", __dirname + "/views");
app.use(express.static(path.join(__dirname, "public")));
app.use(parser.body.urlencoded({ extended: false }));
app.use(parser.body.json());

// Routes
app.get("/", router.index.view);

// Start Server
http.createServer(app).listen(app.get("port"), function() {
    console.log("Express server listening on port " + app.get("port"));
});
