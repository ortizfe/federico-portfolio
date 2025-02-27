import express from "express";
const app = express();

app.listen(3000, () => console.log("Server ready on port 3000"));

if (typeof module === "object") {
  module.exports = app;
}
