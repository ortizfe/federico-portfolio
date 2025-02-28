import express from "express";
const app = express();

export const getTest = app.get("/", (req, res) =>
  res.send("Express on Vercel")
);

app.listen(3000, () => console.log("Server ready on port 3000"));
