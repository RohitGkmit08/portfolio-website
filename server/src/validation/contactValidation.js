const { body } = require("express-validator");

const contactValidation = [
  body("name")
    .trim()
    .notEmpty()
    .escape()
    .withMessage("Name is required"),

  body("email")
    .trim()
    .isEmail()
    .withMessage("Please enter a valid email address"),

  body("subject")
    .trim()
    .notEmpty()
    .escape()
    .withMessage("Subject is required"),

  body("message")
    .trim()
    .notEmpty()
    .escape()
    .withMessage("Message is required"),
];

module.exports = contactValidation;