const nodemailer = require("nodemailer");
const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 8000;
const mypath = path.join(__dirname, "./public");

app.use(express.static(mypath));

const sendmail = async (req, res, next) => {
    try {
        const code = req.query.code;
        const email = req.query.email;
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: "selmonbhoi690@gmail.com",
                pass: "ibssmcuzkdjdhbyr",
            },
        });

        const info = await transporter.sendMail({
            from: `"Attend-Go 👻" <${email}>`,
            to: email,
            subject: "Verification Code",
            text: "",
            html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>Email Verification</h2>
            <p>Hello,</p>
            <p>Your verification code is: <strong>${code}</strong></p>
            <p>Please use this code to verify your email address.</p>
            <p>If you did not request this verification, you can safely ignore this email.</p>
            <p>Thank you!</p>
        </div>`
        });

        res.send(`1`);
    } catch (error) {
        res.status(500).send("0");
    }
};

app.get('/mail', sendmail);

app.get("/", (req, res) => {
    res.send("This is Home page");
});

app.listen(PORT, () => {
    console.log("Listening " + PORT);
});
