// const nodemailer = require("nodemailer");

// const sendMail = async (to, subject, text) => {
//     const transporter = nodemailer.createTransport({
//         host: 'smtp.gmail.com',
//         port: 465,
//         secure: true,
//         auth: {
//             user: process.env.NODEMAILER_USER,
//             pass: process.env.NODEMAILER_PASS,
//         },
//     });

//     await transporter.sendMail({
//         from: process.env.NODEMAILER_USER,
//         to,
//         subject,
//         text,
//     });
// };

// module.exports = sendMail;

const nodemailer = require("nodemailer");

const sendMail = async ({ to, subject, text, replyTo }) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.NODEMAILER_USER,
    to,
    subject,
    text,
    replyTo, // 👈 this is key
  });
};

module.exports = sendMail;
