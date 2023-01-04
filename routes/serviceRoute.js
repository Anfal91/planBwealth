function initServiceRoute(app) {
  app.get("/service/mutual-fund", (req, res) => {
    res.render("services/mutual-fund");
  });
  app.get("/service/mars", (req, res) => {
    res.render("services/mars");
  });
  app.get("/service/nj-portfolio-management", (req, res) => {
    res.render("services/nj-portfolio-management");
  });
  app.get("/service/loan-against-securities", (req, res) => {
    res.render("services/loan-against-securities");
  });
}
module.exports = initServiceRoute;
