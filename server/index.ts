import express from "express";
import cors from "cors";
import bluebird from "bluebird";
import glyphList from "../lib/loadDictionary";
import bannedWords from "../lib/loadBannedWords";
import fs from "fs";
import path from "path";

interface Loaded {
  glyphList: object;
  bannedWords: Array<string>;
}

const loaded: Loaded = {
  glyphList,
  bannedWords
};

const port: number = 6969;
const app: express.Application = express();
bluebird.promisifyAll(app);

app.use(cors());
app.use(express.json());

app.get(
  "/load",
  (req: express.Request, res: express.Response): void => {
    res.json(loaded);
  }
);

app.post(
  "/load/glyph",
  (req: express.Request, res: express.Response): void => {
    let { glyph, letter } = req.body;
    fs.appendFileSync(
      __dirname + `../lib/dependencies/letters/${letter}.txt`,
      glyph + "\r\n"
    );
    res.send("Success");
  }
);

app.post(
  "/load/word",
  (req: express.Request, res: express.Response): void => {
    let word: string = req.body.payload;
    console.log("we in here ", word);
    fs.appendFileSync(
      path.join(__dirname, "../lib/dependencies/bannedWords.txt"),
      word + "\n"
    );
    res.json("Success");
  }
);

app.listen(port, () => console.log("Server started on port ", port));
