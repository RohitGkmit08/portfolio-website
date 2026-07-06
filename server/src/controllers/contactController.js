const ContactMessage = require("../models/ContactMessage");
const { sendContactEmail } = require("../utils/mailer");

const submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const contactMessage = await ContactMessage.create({
      name,
      email,
      subject,
      message,
    });

    await sendContactEmail({ name, email, subject, message });

    return res.status(201).json({
      success: true,
      message: "Message sent successfully.",
      data: contactMessage,
    });
  } catch (error) {
    console.error("Contact Submission Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to submit contact form.",
    });
  }
};

module.exports = {submitContact}; 