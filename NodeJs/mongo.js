const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("Connected succesfully");
  })
  .catch((err) => {
    console.log("error in connection" + err);
  });

const Schema = new mongoose.Schema({
  Name: String,
  Age: Number,
  Gender: String,
});

const User = new mongoose.model("User", Schema);

app.get("/user", async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get("/user/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ mess: "user not found" });
    }
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.post("/user", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(200).json(newUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.put("/user/:id", async (req, res) => {
  try {
    const update = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!update) {
      return res.status(404).json({ mess: "user not found" });
    }
    res.json(update);
  } catch (err) {
    res.json(err);
  }
});

app.delete("/user/:id", async (req, res) => {
  try {
    const dlt = await User.findByIdAndDelete(req.params.id);
    res.json(dlt);
  } catch (err) {
    res.status(500).json({ error: err.mess });
  }
});

app.get("/file", async (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "increaseCount.html"));
  } catch (err) {
    res.json({ errpr: err.message });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server created");
});
