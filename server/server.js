import express from "express";
const app = express();
import cors from "cors";
const corsOptions = {
  origin: ["https://localhost:5173"],
};

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
  res.json({ fruits: ["apple", "orange", "banana"] });
});

app.listen(8080, () => {
  console.log("Server has started on port 8080");
});
