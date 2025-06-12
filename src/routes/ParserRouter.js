import express from "express";
import ParserController from "../controllers/ParserController.js";

const geminiParser = express.Router();
const parserController = new ParserController();

geminiParser.post("/", (req, res, next) => {
  parserController.parseData(req, res, next);
});

export default geminiParser;
