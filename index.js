import data from "./pgql.js";
export default async () => {
  const query = "SELECT * FROM envs WHERE name= $1";
  const result = await data.read(query, [process.env.ENV_KEY]);
  const keys = result?.rows?.shift()?.value;
  const output = JSON.parse(keys);

  process.env = { ...process.env, ...output };
};
