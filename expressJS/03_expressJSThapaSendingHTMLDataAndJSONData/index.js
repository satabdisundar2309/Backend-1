const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send(`
    <h1>Hello and welcome to the home page</h1>
    <h2>This is me this side</h2>
    `);
});
app.get("/contact", (req, res) => {
  // sending multiple lines of response using write() method
  res.status(200).write(`<h1>Hello thgisa is contact page</h1>`);
  res.status(200).write(`Welcome buddy`);
  res.send(); //if you dont write this line after using the write methoid, then the browser will continue to load and load //!Hence in this case this is important
});
// app.get("/about", (req, res) => {
//   const data = [
//     {
//       id: 1,
//       pName: "Vivo",
//       type: "Mobile",
//     },
//     {
//       id: 2,
//       pName: "Dell",
//       type: "Laptop",
//     },
//     {
//       id: 3,
//       pName: "LG",
//       type: "Television",
//     },
//   ];
//   //   res.status(200).send(JSON.stringify(data));
//   //? In the above line we are explicitly converting the data into string, but express has the ability to cpnvert the json data into string. Hence we dont required to convert it explicitly
//   res.status(200).send(data);
// });
//! the below syntax will give the same result as the above syntax
app.get("/about", (req, res) => {
  const data = [
    {
      id: 1,
      pName: "Vivo",
      type: "Mobile",
    },
    {
      id: 2,
      pName: "Dell",
      type: "Laptop",
    },
    {
      id: 3,
      pName: "LG",
      type: "Television",
    },
  ];
  res.status(200).json(data);
});

// ! The above res.send() and res.json() will behave same here, but the difference is res.send() only converts the arrays,jsons, and objects into string when passed, bt the res.json() converts everything such as null and undefined into json as well.

app.listen(8000);
