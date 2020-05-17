const { check } = require("express-validator");
const express = require("express");
const router = express.Router();
const { signin, signup, isSignedIn, signout } = require("../controllers/auth");

router.post(
  "/signup",
  [
    check("name", "name shold  be at least 3 character").isLength({ min: 3 }),
    check("email", "email is required").isEmail(),
    check("password", "password shold be at least 5 char").isLength({ min: 5 }),
  ],
  signup
);

router.post(
  "/signin",
  [
    check("email", "email is required").isEmail(),
    check("password", "password is required").isLength({ min: 5 }),
  ],
  signin
);
router.get("/signout", signout);

module.exports = router;
