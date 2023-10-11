import express from "express";
import cors from "cors";
import { connect } from "mongoose";
import "dotenv/config";
import auth from "./routes/auth";
import post from "./routes/post";
import authMiddleware from "./utils/authChecker";
import path from "path";
import uploadMiddleware from "./utils/multer";

const app = express();
const PORT: number = Number(process.env.PORT) || 9999;

app.use(express.json());
app.use(cors());
app.use("/images", express.static(path.join(__dirname, "images")));

connect(
  `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLASTER_NAME}.lghnr7n.mongodb.net/ExpressBlog?retryWrites=true&w=majority`,
)
  .then(() => {
    console.log(`MongoDB has been connected successfuly!`);
  })
  .catch(err => console.log(err));

app.use("/auth/", auth);
app.use("/posts/", post);

app.post("/upload", authMiddleware, uploadMiddleware, (req, res) => {
  try {
    if (req && req.file && req.file.originalname) {
      res.json({
        url: `/images/${req.file.filename}`,
      });
    } else {
      res.status(400).json({ error: "Bad Request" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app
  .listen(PORT, () => {
    console.log(`Listening port: ${PORT}`);
  })
  .on("error", err => {
    console.log(err);
  });
