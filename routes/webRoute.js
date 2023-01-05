function initWebRoute(app) {
  app.get("/", (req, res) => {
    res.render("home");
  });
  app.get("/service", (req, res) => {
    res.render("service");
  });
  app.get("/library", (req, res) => {
    res.render("library");
  });
  app.get("/contact", (req, res) => {
    res.render("contact");
  });
  app.get("/thankyou", (req, res) => {
    res.render("thankyou");
  });
}

module.exports = initWebRoute;
