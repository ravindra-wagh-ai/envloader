import data from "./pgql";
import fs from "fs";
export default async () => {
  const query = "SELECT * FROM envs WHERE name= $1";
  const result = await data.read(query, [process.env.ENV_KEY]);
  const output = result?.rows?.shift()?.value;
  //process.env = { ...process.env, ...output };
  try {
    fs.unlinkSync("app.env");
  } catch (e) {
    console.log(e);
  }
  let keys = Object.keys(output);
  keys.forEach((k) => {
    fs.appendFileSync("app.env", `${k}=${output[k]}\n`, "utf8");
  });
};
