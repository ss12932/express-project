const express = require("express");
const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
  res.send("Heeeeelllloooo!");
});
app.get("/messages", (req, res) => {
  res.send({ id: 10, name: "sir Newton" });
});
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
app.post("/messages", (req, res) => {
  console.log("updating messages");
});
