const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "PrashantYadavisagoodb$oy";
const fetchuser = require("../middleware/fetchuser");

// ROUTE 1: Create a User using: POST "/api/auth/createuser". No login required
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("username", "Enter a valid username").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Enter a valid password").isLength({ min: 5 }),
    body("cpassword", "Enter a valid cpassword").isLength({ min: 5 }),
  ],
  async (req, res) => {
    // If there are errors return bad request and the errors
    const result = validationResult(req);
    let success = false;

    if (!result.isEmpty()) {
      return res.status(400).json({ success, errors: result.array() });
    }
    // Check whether the user with this email exists already
    try {
      // Authenticating Captcha
      const captchaRes = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${req.body.secretKey}&response=${req.body.recaptchaValue}`,
        {
          method: "POST",
        }
      );
      const captchaData = await captchaRes.json();

      if (captchaData.success) {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
          return res.status(400).json({
            success,
            error:
              "Unable to process your request. Please try a different email address.",
          });
        }
        let username = await User.findOne({ username: req.body.username });
        if (username) {
          return res.status(400).json({
            success,
            error: "Kindly select a different username.",
          });
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        // Create a new user
        user = await User.create({
          name: req.body.name,
          username: req.body.username,
          email: req.body.email,
          password: secPass,
        });
        // .then(user => res.json(user))
        // .catch(err => res.json({error: 'Please enter a unique value for emial', message: err.message}))
        const data = {
          user: {
            id: user.id,
          },
        };
        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.send({ success, authtoken });
      } else {
        return res.status(429).json({
          success,
          error: "Recaptcha verification failed. Please try again.",
        });
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal server error");
    }
  }
);

// ROUTE 2: Authenticate a User using: POST "/api/auth/login". No login required
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    // If there are errors return bad request and the errors
    const result = validationResult(req);
    let success = false;
    if (!result.isEmpty()) {
      return res.status(400).json({ success, errors: result.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({
          success,
          error: "Please try to login with correct credentials.",
        });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res.status(400).json({
          success,
          error: "Please try to login with correct credentials.",
        });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.send({ success, authtoken });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal server error");
    }
  }
);

// ROUTE 3: Get loggedin User Details using: POST "/api/auth/getuser". Login required
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
