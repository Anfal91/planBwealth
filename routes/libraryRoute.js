function initLibraryRoute(app) {
  app.get("/library/SIP", (req, res) => {
    res.render("library/SIP");
  });

  app.get("/library/STP", (req, res) => {
    res.render("library/STP");
  });
  app.get("/library/SWP", (req, res) => {
    res.render("library/SWP");
  });
  app.get("/library/term-insurance", (req, res) => {
    res.render("library/term-insurance");
  });
  app.get("/library/health-insurance", (req, res) => {
    res.render("library/health-insurance");
  });
}
module.exports = initLibraryRoute;
