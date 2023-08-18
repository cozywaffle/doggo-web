import express from "express";
import cors from "cors";
import { connect } from "mongoose";
import "dotenv/config";
import auth from "./routes/auth";
import post from "./routes/post";

const app = express();
const PORT: number = Number(process.env.PORT) || 3001;

app.use(express.json());
app.use(cors());

connect(
  `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLASTER_NAME}.lghnr7n.mongodb.net/ExpressBlog?retryWrites=true&w=majority`,
)
  .then(() => {
    console.log(`MongoDB has been connected successfuly!`);
  })
  .catch(err => console.log(err));

app.use("/auth/", auth);
app.use("/posts/", post);

app
  .listen(PORT, () => {
    console.log(`Listening port: ${PORT}`);
  })
  .on("error", err => {
    console.log(err);
  });
