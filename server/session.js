import dotenv from "dotenv";
import MySQLStore from "express-mysql-session";
import option from "./option.js";
dotenv.config();

let sessionStore = new MySQLStore(option);

const sessionObj = {
  HttpOnly: true,
  secure: true,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  store: sessionStore,
  cookie: {
    secure: false,
    maxAge: 1000 * 60 * 60, //쿠키 유효시간 1시간
  },
};

export default sessionObj;
