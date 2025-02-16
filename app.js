require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

const indexRouter = require("./routes/index"); 
const usersRouter = require("./routes/users");  

const app = express();

// 미들웨어 설정
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(helmet());

// 라우트 설정
app.use("/api", indexRouter);
app.use("/api/users", usersRouter);

// 404 에러 처리
app.use((req, res, next) => {
  next(createError(404));
});

// 오류 처리 미들웨어
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: err.message });
});

module.exports = app;
