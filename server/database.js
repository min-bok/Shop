import fs from "fs";
import mysql from "mysql2/promise";

const data = fs.readFileSync("./database.json");
const conf = JSON.parse(data);

const pool = mysql.createPool({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database,
});

export default pool;
