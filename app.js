const fetch = require("node-fetch");
const express = require("express");
const app = express();
const port = 5000;

app.get("/all", (req, res) => {
  try {
    let response = [];
    fetch("https://dummyjson.com/users")
      .then((resp) => resp.json())
      .then((json) => (response = json));

    res.send(response);
  } catch (error) {
    res.send("something hapend!! please check your datadoc");
    throw Error;
  }
});

app.listen(port, () => {
  console.log(`app running at http://localhost:${port}`);
});
