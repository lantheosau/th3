const express = require("express");
const app = express();
const User = require("./db/userModel");
const Photo = require("./db/photoModel");

app.use(express.json());

app.get("/user/list", async (req, res) => {
  const users = await User.find({}, "_id first_name last_name");
  res.json(users);
});

app.get("/user/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(400).send("User not found");
    res.json(user);
  } catch {
    res.status(400).send("Invalid user ID");
  }
});

app.get("/photosOfUser/:id", async (req, res) => {
  try {
    const photos = await Photo.find({ user_id: req.params.id });
    const formattedPhotos = photos.map(photo => ({
      _id: photo._id,
      user_id: photo.user_id,
      file_name: photo.file_name,
      date_time: photo.date_time,
      comments: photo.comments.map(c => ({
        comment: c.comment,
        date_time: c.date_time,
        _id: c._id,
        user: c.user
      }))
    }));
    res.json(formattedPhotos);
  } catch {
    res.status(400).send("Invalid user ID");
  }
});

app.listen(3000, () => console.log("Server is listening on http://localhost:3000"));
