import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Cors from "cors";
import Data from "./data.js";
import Videos from "./dbVideos.js";

//app config
const app = express();
dotenv.config();
const port = process.env.PORT || 8001;

//middleware
app.use(express.json());
// app.use(Cors());
// app.use((req, res, next) => {
//   res.setHeaders("Access-Control-Allow-Origin", "*"),
//     res.setHeaders("Access-Control-Allow-Headers", "*"),
//     next();
// });

// DB config
mongoose.connect(process.env.MANGO_DB_ALTAS, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// API endpoints
app.get("/", (req, res) => res.status(200).send("HELLO THERE!!!"));

app.get("/v1/posts", (req, res) => {
  Videos.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.post("/v1/posts", (req, res) => {
  const dbVideo = req.body;

  Videos.create(dbVideo, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

//Listener
app.listen(port, () => console.log(`listening on localhost:${port}`));
