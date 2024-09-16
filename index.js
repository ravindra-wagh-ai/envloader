import data from "./pgql.js";
export default async (query, values) => {
  const result = await data.read(query, values);
  const keys = result?.rows?.shift()?.value;
  const output = JSON.parse(keys);

  process.env = { ...process.env, ...output };
};
