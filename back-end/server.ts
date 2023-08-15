import express from "express";
import { connect } from "mongoose";
import "dotenv/config";
import auth from "./routes/auth";

const app = express();
const PORT: number = Number(process.env.PORT) || 3001;

app.use(express.json());

connect(
  `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLASTER_NAME}.lghnr7n.mongodb.net/?retryWrites=true&w=majority`,
)
  .then(() => {
    console.log(`MongoDB has been connected successfuly!`);
  })
  .catch(err => console.log(err));

app.use("/auth/", auth);

app
  .listen(PORT, () => {
    console.log(`Listening port: ${PORT}`);
  })
  .on("error", err => {
    console.log(err);
  });
