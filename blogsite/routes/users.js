var express = require("express");
var router = express.Router();
const userController = require("../api/Controllers/userController");
/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.post("/getUser", userController.getUsers);

module.exports = router;
