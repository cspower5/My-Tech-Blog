const express = require("express");
const express_handlebars = require("express-handlebars");
const expsession = require("express-session");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-sesseion-sequalize")(expsession.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = express_handlebars.create();

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static("public"));
app.use(expsession({
  secret:"thispreventssessionhijacking",
  cookie:{},
  resave: false,
  saveUninitialized:true,
  store: new SequalizeStore({db:sequelize})
}));

app.get("/", (req, res) => {
  res.render("login", {
    logged_in: true,
    script: "login",
  });
});

app.use(require("./controllers/"));

app.listen(PORT, () => {
  console.log("server listening on port on", PORT);
});
