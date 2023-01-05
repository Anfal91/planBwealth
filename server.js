const express = require("express");
const app = express();
const http = require("http");
const ejs = require("ejs");
// const expressEjsLayout = require("express-ejs-layouts");
const path = require("path");
const nodemailer = require("nodemailer");
const expressEjsLayouts = require("express-ejs-layouts");
const { json, response } = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;

var server = http.Server(app);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

require("./routes/webRoute")(app);
require("./routes/serviceRoute")(app, nodemailer);
require("./routes/libraryRoute")(app);

app.post("/send_mail", function (req, res) {
  var name = req.body.inputname;
  var email = req.body.inputemail;
  var subject = req.body.inputsubject;
  var message = req.body.inputmessage;

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "anfal.androapps@gmail.com",
      pass: "dzecaliuzcmbpvcw",
    },
  });
  var mailOptions = {
    from: email,
    to: "planbwealth.in@gmail.com",
    subject: "Enquiry from website",
    text: `
    Name: ${name}
    Email: ${email}
    Subject: ${subject}
    Message: ${message}`,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
    res.redirect("/thankyou");
  });
});

// set template engine
app.use(expressEjsLayouts);

app.set("views", path.join(__dirname, "/public/views"));

app.set("view engine", "ejs");

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
