const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("./models/user.shcema");
const jwt = require("jsonwebtoken");
const argon2 = require("argon2");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/signup", async (req, res) => {
  const { name, password, user_id } = req.body;
  console.log(name, password, user_id);

  const exist = UserModel.findOne({ user_id });
  if (exist) {
    res.send("User id already existed change user Id");
  } else {
    const hash = await argon2.hash(password);
    const user = new UserModel({ name, password: hash, user_id });
    await user.save();
    res.send("User created successfully");
  }
});

mongoose
  .connect(
    "mongodb+srv://jyotipm1999:Jyotipm1999@cluster0.nddezfx.mongodb.net/colorbracket"
  )
  .then(() => {
    app.listen(8080, () => {
      console.log("http://localhost:8080");
    });
  });
