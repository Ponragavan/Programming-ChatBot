const express = require("express");
require("dotenv").config();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_URL }));

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

app.post("/api/mail", (req, res) => {
  const { otp, mail } = req.body;
  const mailOptions = {
    from: `"Programming Chatbot" ${process.env.EMAIL}`, // Sender's email
    to: mail, // Recipient's email
    subject: "OTP Verification for Java Question", // Clear subject
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #4CAF50;">Hello,</h2>
        <p>We received a request to verify your email for accessing Java programming questions in our chatbot.</p>
        <p style="font-size: 16px;">Your One-Time Password (OTP) for verification is:</p>
        <div style="margin: 10px 0; padding: 10px; font-size: 20px; font-weight: bold; color: #ffffff; background-color: #4CAF50; border-radius: 5px; text-align: center;">
          ${otp}
        </div>
        <p>Please enter this OTP in the chatbot to complete your verification.</p>
        <p style="color: #555;">If you did not make this request, you can safely ignore this email.</p>
        <p>Thank you,<br><strong>Programming Chatbot Team</strong></p>
      </div>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send(error);
    }
    res.status(200).send("Email sent successfully");
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
