const models = require("./models");

var express = require("express");
var app = express();
module.exports = app;
var router = express.Router();
router.get("/", function (req, res) {});

//create dogs
router.post("/", function (req, res) {
  async function createPooch() {
    try {
      const newDog = models.pooch.create({
        breed: "schnauzer",
        breedOriginId: 104,
        breedTraitId: 204,
      });
    } catch (err) {
      console.log("🚗, 🚗, 🚗,", err);
    }
  }
  createPooch();
});
module.exports = app;

//CREATING FUNCTIONs
// async function createPooch() {
//   try {
//     const newDog = models.pooch.create({
//       breed: "schnauzer",
//       breedOriginId: 104,
//       breedTraitId: 204,
//     });
//   } catch (err) {
//     console.log("🚗, 🚗, 🚗,", err);
//   }
// }
// createPooch();
