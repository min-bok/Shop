import dotenv from "dotenv";
dotenv.config();
// import fs from "fs";
// dev;
// const data = fs.readFileSync("./database.json");
// const conf = JSON.parse(data);

// const option = {
//   host: conf.host,
//   user: conf.user,
//   password: conf.password,
//   port: conf.port,
//   database: conf.database,
// };

// prod
const option = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  port: process.env.port,
  database: process.env.database,
};

export default option;
