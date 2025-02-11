express = require("express");
mongoose = require("mongoose");
cors = require("cors");
path = require("path");
app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://saravanakumar:saravana123@cluster0.rsqg0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
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

app.listen(3000, () => {
  console.log("Server created");
});
