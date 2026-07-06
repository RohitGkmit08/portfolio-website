const ContactMessage = require("../models/ContactMessage");

const submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    await ContactMessage.create({
      name,
      email,
      subject,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Contact Submission Error:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
  }
};

module.exports = {submitContact};