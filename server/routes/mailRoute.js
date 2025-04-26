const express = require("express");
const router = express.Router();
const sendMail = require("../utils/mail");

router.post("/send-email", async (req, res) => {
  const { name, email, subject, message } = req.body;

  const fullMessage = `
You received a message from your contact form.

From: ${name}
Email: ${email}

Subject: ${subject}

Message:
${message}
`;

  try {
    await sendMail({
      to: "aanushkachaudhary2003@gmail.com",
      subject,
      text: fullMessage,
      replyTo: email, // 👈 this will allow the admin to reply directly to the user
    });

    res.status(200).json({ success: true, message: "Email sent successfully" });
    console.log("📩 POST /api/send-email hit");

  } catch (err) {
    console.error("Email sending error:", err);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

module.exports = router;
