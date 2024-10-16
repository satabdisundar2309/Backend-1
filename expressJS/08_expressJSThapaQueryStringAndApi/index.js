const express = require("express");
const app = express();
const path = require("path");
const viewsPath = path.join(__dirname, "/templates/views");
const partialssPath = path.join(__dirname, "/templates/partials");

app.set("views", viewsPath);
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "/public")));
const hbs = require("hbs");
hbs.registerPartials(partialssPath);
const requests = require("requests");
app.get("/", (req, res) => {
  res.render("index", {
    name: "Satabdisundar",
  });
});
app.get("/about", (req, res) => {
  if (req.query.city) {
    //   ! You have to install requests pacckage to use it
    requests(
      `http://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&units=metric&appid=7c825baf26f2f6a67108fb4adfd073e2`
    )
      .on("data", (chunk) => {
        const objdata = JSON.parse(chunk);
        const arrData = [objdata];
        console.log(
          ` City name is ${arrData[0].name} and tempereture is ${arrData[0].main.temp}`
        );
        res.write(arrData[0].name);
      })
      .on("end", (err) => {
        if (err) return console.log("connection closed due to errors", err);
        res.end();
      });
  } else {
    const data = {
      name: req.query.name,
      age: req.query.age,
    };
    res.render("about", { data });
  }
});
app.get("/about/*", (req, res) => {
  res.send("about bhitare nhi kichhi");
});
app.get("*", (req, res) => {
  res.send("eithi nhi kichhi");
});

app.listen(5001);
