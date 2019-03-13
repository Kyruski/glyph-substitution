import path from "path";

function getPath(): string {
  let runCondition: Array<string> = process.argv[0].split("/");
  let rootPath: string =
    runCondition[runCondition.length - 1] === "node"
      ? path.join(process.argv[1], "../lib")
      : path.join(process.argv[0], "../../../../../../../../../../lib");
  return rootPath;
}

export default getPath;
