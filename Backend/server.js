const express = require("express");
const { PORT, MONGODB } = require("./Config");
const dotenv = require("dotenv");
const {connectDB} = require("./Config/database");
dotenv.config();
const cors = require("cors")
 const Postrouter=require("./Router/postRoute")

const app = express();

app.use(
  cors({
    origin: [process.env," http://localhost:5173"],
    methods: ["POST"],
    credentials: true
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.use("/data",Postrouter)
connectDB();

app.listen(PORT, err => {
  if (err) throw err;
  console.log(`Server is running at http://localhost:${PORT}`);
  //   console.log(`MongoDB URL: ${MONGODB}`);
});
