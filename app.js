const fetch = require("node-fetch");
const express = require("express");
const app = express();
const port = 5000;

app.get("/all", async (req, res) => {
  try {
    console.log("res");
    await fetch("https://dummyjson.com/users")
      .then((resp) => resp.json())
      .then((json) => res.json(json));
  } catch (error) {
    throw Error;
  }
});

app.listen(port, () => {
  console.log(`app running at http://localhost:${port}`);
});
