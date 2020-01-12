const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

const User = require("../models/User");

//@route    GET api/auth
//@desc     Get logged in user
//@address  Private
router.get("/", (request, response) => {
  response.send("Get logged in user");
});

//@route    POST api/auth
//@desc     Auth user and get token
//@address  Public
router.post(
  "/",
  [
    check("email", "Please, include a valid email").isEmail(),
    check("password", "Password is required").exists()
  ],
  async (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    const { email, password } = request.body;
    try {
      let user = await User.findOne({ email });

      if (!user) {
        return response.status(400).json({ msg: "Invalid credentials" });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return response.status(400).json({ msg: "Invalid credentials" });
      }

      const payload = {
        user: {
          id: user.id
        }
      };
      jwt.sign(
        payload,
        config.get("JWTsecret"),
        {
          expiresIn: 360000
        },
        (error, token) => {
          if (error) throw error;
          response.json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      response.status(500).send("Server error");
    }
  }
);

module.exports = router;
