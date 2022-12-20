import fs from "fs";
const data = fs.readFileSync("./database.json");
const conf = JSON.parse(data);

const option = {
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database,
};

export default option;
