//modules
const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");
const cookie = require("cookie-parser");
const { secretKey } = require("./config");
const routers = require("./routes");

//ejs setting
app.engine("html", ejs.renderFile);
app.set("view engine", "html");
app.set("views", path.join(__dirname, "views"));

//middleware
app.use("/", express.static(path.join(__dirname, "public")));
app.use("/images", express.static(path.join(__dirname, "images")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookie());

app.use(routers);

module.exports = app;
