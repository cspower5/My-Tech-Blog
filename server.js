const express = require("express");
const express_handlebars = require("express-handlebars");

const app = express();
const hbs = express_handlebars.create();

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("login", {
    logged_in: true,
    script: "login",
  });
});

app.listen(3000, () => {
  console.log("server listening on port", 3000);
});
