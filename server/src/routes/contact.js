const express = require("express");

const contactValidation = require("../validation/contactValidation");
const validate = require("../middleware/validate");
const { submitContact } = require("../controllers/contactController");

const router = express.Router();

router.post(
  "/",
  contactValidation,
  validate,
  submitContact
);

module.exports = router;