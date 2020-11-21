const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const Contact = require("../models/Contact");

// @route  GET api/users
// @desc   Get all user contacts
// @access Private
router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// @route  POST api/users
// @desc   Add new contact
// @access Private
router.post("/", (req, res) => {
  res.send("Add contact");
});

// @route  PUT api/users/:id
// @desc   Update contact
// @access Private
router.put("/:id", (req, res) => {
  res.send("Update contact");
});

// @route  DELETE api/users/:id
// @desc   Delete contact
// @access Private
router.delete("/:id", (req, res) => {
  res.send("Delete contact");
});

module.exports = router;