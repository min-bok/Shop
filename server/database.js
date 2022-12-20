import fs from "fs";
import mysql from "mysql2/promise";
import option from "./option.js";

const data = fs.readFileSync("./database.json");
const conf = JSON.parse(data);

const pool = mysql.createPool(option);

export default pool;
