import express from "express";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send({
    message: "Penis!",
  });
});

app.listen(PORT, () => {
  console.log(`Listening port: ${PORT}`);
});
