import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";

//APP CONFIG
dotenv.config();
const app = express();
const port = 9000;

//APP CONFIG
dotenv.config();
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.json());

//DB CONFIG
const passwordDb = "ZlH8XMpYOL48BIKw";
const url = `mongodb+srv://adrianajanssen96proton:${passwordDb}@cluster0.zmpvesf.mongodb.net/?retryWrites=true&w=majority`;
const localUrl = `mongodb://127.0.0.1:27017/pwds`;

//Db Collections
const userinfoSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const UserInfo = mongoose.model("UserInfo", userinfoSchema);

//ROUTES
app.get("/", (req, res) => {
  res.send("working");
});

//SAVING USER
app.post("/post/info", (req, res) => {
  console.log("came here");
  //accessing data from client
  const { email, password } = req.body;

  //function for fetching the already existing user info
  async function getUserInfoDb(email) {
    const user = UserInfo.find({ email: email });
    return user;
  }

  getUserInfoDb(email).then((foundUsers) => {
    const newUser = new UserInfo({
      email: email,
      password: password,
    });

    //saving the new password
    newUser.save().then(() => {
      console.log("user saved succesfully");
      res.status(201).send("user saved succesfully");
    });
  });
});

//START CONNECTION
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to the database");
    app.listen(port, () => {
      console.log(`server has started on port ${port}`);
    });
  });
