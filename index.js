const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
// Unexpected token < in JSON at position 0 solution
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello From My Smart Nodemon App!");
});
//   Create path
const users = [
  { id: 1, name: "Alim", job: "Software Engineer" },
  { id: 2, name: "Dlim", job: "Software Engineer" },
  { id: 3, name: "Plim", job: "Software Engineer" },
  { id: 4, name: "AJlim", job: "Software Engineer" },
  { id: 5, name: "Kalim", job: "Software Engineer" },
];
app.get("/users", (req, res) => {
  //  query Search by name n url
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(matched);
  } else {
    res.send(users);
  }
});
app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id == id);
  res.send(user);
});
// Data Send to Sever by post method (add user)
app.post("/user", (req, res) => {
  console.log("request", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.get("/fruits", (req, res) => {
  res.send(["mango", "apple", "orange"]);
});
app.get("/fruits/mango/fazle", (req, res) => {
  res.send("Sour sound fazle flavor");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
