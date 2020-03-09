import express from "express";

const app = express();
app.get("/", (req, res) => {
  return res.send("MotherFucker");
});
app.listen(3001);
