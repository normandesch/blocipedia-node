const path = require("path");
require("dotenv").config();
const viewsFolder = path.join(__dirname, "..", "views");
const bodyParser = require("body-parser");
const passportConfig = require("./passport-config");
const expressValidator = require("express-validator");
const flash = require("express-flash");
const session = require("express-session");
const logger = require("morgan");

module.exports = {
  init(app, express) {
    app.use(logger("dev"));
    app.set("views", viewsFolder);
    app.set("view engine", "ejs");
    app.use(express.static(path.join(__dirname, "..", "assets")));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(expressValidator());
    app.use(
      session({
        secret: process.env.cookieSecret,
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 1.21e9 }
      })
    );
    app.use(flash());
    passportConfig.init(app);

    app.use((req, res, next) => {
      res.locals.currentUser = req.user;
      next();
    });
  }
};
