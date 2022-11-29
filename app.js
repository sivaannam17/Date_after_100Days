const express = require("express");
const addDays = require("date-fns/addDays");
const app = express();

app.get("/", (request, response) => {
  let today = new Date();

  let year = today.getFullYear();
  let month = today.getUTCMonth();
  let day = today.getUTCDate();
  let date = addDays(new Date(), 100);
  response.send(
    `${date.toISOString().slice(8, 10)}/${date
      .toISOString()
      .slice(5, 7)}/${date.getFullYear()}`
  );
});
app.listen(3000);
module.exports = app;
