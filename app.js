const express = require("express");
const app = express();

app.get("/", (request, response) => {
  let date = new Date();
  let day = addDays(new Date(date), 100);
  response.send(day);
});

module.exports = app;
