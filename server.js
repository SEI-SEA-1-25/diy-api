// Required Modules
const express = require("express");
const rowdy = require("rowdy-logger");
const db = require("./models");

//controllers see screenshot when adding controllers
// mounting the server
// app.use('/dinos', require('./controllers/dinoController'))

// Variables
const app = express();
const PORT = 3000;
const rowdyResults = rowdy.begin(app);

// Middleware
app.use(express.urlencoded({ extended: false }));
// urlencoded gets the form data from the request and puts it inside of
// req.body

// Routes
app.get("/", (req, res) => {
  res.send("Hello World! From express! For a second time!");
});

// CRUD routes for dinos

// Index (Read All) Route
app.get("/user1s", async (req, res) => {
  try {
    const users = await db.user1.findAll();
    res.send(users);
  } catch (err) {
    console.log(err);
  }
});

app.get("/userdb1s", async (req, res) => {
  try {
    const preUserdbs = await db.userdb1.findAll();
    res.send(preUserdbs);
  } catch (err) {
    console.log(err);
  }
});

// Show (Show One) Route
app.get("/user1s/:id", async (req, res) => {
  try {
    const user = await db.user1.findByPk(req.params.id);
    res.send(user);
  } catch (err) {
    console.log(err);
  }
});

app.get("/userdb1s/:id", async (req, res) => {
  try {
    const preUserdbs = await db.userdb1.findByPk(req.params.id);
    res.send(preUserdbs);
  } catch (err) {
    console.log(err);
  }
});

// Create Route
app.post("/user1s", async (req, res) => {
  try {
    // console.log(req.body);
    const newUser = await db.user1.create({
      name: req.body.name,
      address: req.body.address,
      dob: req.body.dob,
      email: req.body.email,
    });
    res.send(newUser);
  } catch (err) {
    console.log(err);
  }
});

app.post("/userdb1s", async (req, res) => {
  try {
    // console.log(req.body);
    const newUserdb = await db.userdb1.create({
      est: req.body.est,
    });
    res.send(newUserdb);
  } catch (err) {
    console.log(err);
  }
});
/////////////////////////////////////////////
app.put("/user1s/:id", async (req, res) => {
  try {
    const user = await db.user1.findByPk(req.params.id);
    const updatedUser = await user.update({
      name: req.body.name,
      address: req.body.address,
      dob: req.body.dob,
      email: req.body.email,
    });
    res.send(updatedUser);
  } catch (err) {
    console.log(err);
  }
});

app.put("/userdb1s/:id", async (req, res) => {
  try {
    const userdb = await db.userdb1.findByPk(req.params.id);
    const updatedpreUserdb = await userdb.update({
      est: req.body.name,
    });
    res.send(updatedpreUserdb);
  } catch (err) {
    console.log(err);
  }
});

app.delete("/user1s/:id", async (req, res) => {
  try {
    const user = await db.user1.findByPk(req.params.id);
    const deletedUser = await user.destroy();
    res.send(deletedUser);
  } catch (err) {
    console.log(err);
  }
});

app.delete("/userdb1s/:id", async (req, res) => {
  try {
    const preCre = await db.userdb1.findByPk(req.params.id);
    const deletedPreCre = await preCre.destroy();
    res.send(deletedPreCre);
  } catch (err) {
    console.log(err);
  }
});

// Start the server!
app.listen(PORT, () => {
  rowdyResults.print();
  console.log(`Server is listening on port ${PORT}`);
});
