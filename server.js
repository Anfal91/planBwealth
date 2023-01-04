const express = require("express");
const app = express();
const ejs = require("ejs");
// const expressEjsLayout = require("express-ejs-layouts");
const path = require("path");
const expressEjsLayouts = require("express-ejs-layouts");
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

require("./routes/webRoute")(app);
require("./routes/serviceRoute")(app);
require("./routes/libraryRoute")(app);

require("./public/assets/js/sendmail");

// set template engine
app.use(expressEjsLayouts);

app.set("views", path.join(__dirname, "/public/views"));

app.set("view engine", "ejs");

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
