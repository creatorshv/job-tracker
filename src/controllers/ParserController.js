import ParserRepository from "../repositories/ParserRepository.js";

export default class ParserController {
  constructor() {
    this.parserRepository = new ParserRepository();
  }

  async parseData(req, res, next) {
    try {
      const result = await this.parserRepository.parseData(req.body);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
}
