const router = require("express").Router();
const sendMail = require("../utils/mail"); // Correctly import sendMail function

router.post("/send", async (req, res) => {
    const { name, email, subject, message } = req.body;

    try {
        const text = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
        await sendMail("your_email@example.com", subject, text);  // Call the sendMail function
        res.status(200).json({ success: true, message: "Email sent successfully!" });
    } catch (err) {
        console.error("Email sending failed:", err);
        res.status(500).json({ success: false, message: "Failed to send email." });
    }
});

module.exports = router;
