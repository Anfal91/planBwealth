const express = require("express");
const app = express();
const http = require("http");
const ejs = require("ejs");
// const expressEjsLayout = require("express-ejs-layouts");
const path = require("path");
const nodemailer = require("nodemailer");
const expressEjsLayouts = require("express-ejs-layouts");
const { json } = require("express");
const PORT = process.env.PORT || 3000;

var server = http.Server(app);
app.use(express.json());

app.use(express.static("public"));

require("./routes/webRoute")(app);
require("./routes/serviceRoute")(app, nodemailer);
require("./routes/libraryRoute")(app);

// set template engine
app.use(expressEjsLayouts);

app.set("views", path.join(__dirname, "/public/views"));

app.set("view engine", "ejs");

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
