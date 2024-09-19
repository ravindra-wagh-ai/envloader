import data from "./pgql";
export default async () => {
  const query = "SELECT * FROM envs WHERE name= $1";
  const result = await data.read(query, [process.env.ENV_KEY]);
  const output = result?.rows?.shift()?.value;
  process.env = { ...process.env, ...output };
};
