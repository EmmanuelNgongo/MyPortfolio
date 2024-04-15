require('dotenv').config();
const express = require('express');
const nodemailer= require('nodemailer');
const app = express();
const port = process.env.PORT; 
const host = process.env.HOST || 'localhost'; 
const cors = require('cors');

app.use(cors());
//Middleware to parse JSON bodies
app.use(express.json());

//Nodemailer transporter setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

//Route to send emails
app.post('/send-email', (req, res) => {
    const {firstName, lastName, email, phone, topic, message} = req.body;
    console.log("Received request: ", req.body);
    const mailOptions = {
        from: process.env.EMAIL_USER, 
        to: process.env.EMAIL_USER, 
        subject: `Message from ${firstName} ${lastName}: ${topic}`,
        text: `You've received a message from ${firstName} ${lastName} (${email}, ${phone}): ${message}`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email', error);
            return res.status(500).send({ message:'Error sending email',error: error.toString() });
        } 
        console.log('Email sent: ' + info.response);
        res.send({ message: 'Email sent successfully'});
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});