import express from "express";
import { connect, connection } from "mongoose";
import "dotenv/config";
import routes from "./routes/routes";

const app = express();
const PORT: number = Number(process.env.PORT) || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connect(
  `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLASTER_NAME}.lghnr7n.mongodb.net/?retryWrites=true&w=majority`,
);
try {
  connection.once("open", function () {
    console.log("Connected successfully");
  });
} catch (error) {
  console.log(error);
}

app.use("/auth/", routes);

try {
  app.listen(PORT, () => {
    console.log(`Listening port: ${PORT}`);
  });
} catch (error) {
  console.log(error);
}
