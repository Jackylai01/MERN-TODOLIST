const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth");
const boardRoute = require("./routes/board");
const sectionRoute = require("./routes/section");

const taskRoute = require("./routes/task");

//連結資料庫
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongodb Connection Successfully!");
  })
  .catch((err) => {
    console.log(err);
  });

//中間建
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use(cors());

app.use("/auth", authRoute);

app.use("/boards", boardRoute);

app.use("/boards", sectionRoute);
app.use("/boards/:boardId/tasks", taskRoute);

//伺服器
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
