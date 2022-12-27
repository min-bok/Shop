import mysql from "mysql2/promise";
import option from "./option.js";

const pool = mysql.createPool(option);

export default pool;
