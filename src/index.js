import express from "express";
import geminiParser from "./routes/ParserRouter.js";
import cors from "cors";

const app = express();
const port = 3000;

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

app.listen(port, () => {
  console.log("Server is listening:", port);
});
