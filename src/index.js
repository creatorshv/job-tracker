import "./lib/env.js";
import express from "express";
import connectToDB from "./lib/dbConnection.js";
import geminiParser from "./routes/ParserRouter.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "*",
    allowedHeaders: "*",
  })
);
app.use(express.json());
app.use("/data", geminiParser);

app.get("/", (req, res) => {
  res.send("Hi from backend");
});

app.listen(PORT, () => {
  console.log("Server is listening:", PORT);
  connectToDB();
});
