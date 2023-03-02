require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors")

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/", (req, res) => {
  const {username, password} = req.body;
  const user = new User({
    username,
    password
  });
  user.save((err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send("User added to the database")
    }
  });
});

// connect to DB
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to DB & listening on port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });

  const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

const User = mongoose.model('User', userSchema)

const user = new User({
    username: 'bob',
    password: 'bob'
})

user.save((err) => {
    if (err) throw err;
    console.log('New user added to the database');
});
