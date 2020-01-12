const express = require("express");
const router = express.Router();

//@route    GET api/auth
//@desc     Get logged in user
//@address  Private
router.get("/", (request, response) => {
  response.send("Get logged in user");
});

//@route    POST api/auth
//@desc     Auth user and get token
//@address  Public
router.post("/", (request, response) => {
  response.send("Log in user");
});

module.exports = router;
