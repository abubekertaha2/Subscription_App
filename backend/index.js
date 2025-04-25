import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import nodemailer from 'nodemailer';

const app = express();

app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.get('/api/contact', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'abubekertaha3@gmail.com',
        pass: 'your_app_password' // NOT your Gmail password! Use App Password
      }
    });

    const mailOptions = {
      from: email,
      to: 'your.email@gmail.com', // Where you receive the message
      subject: `New Contact Message from ${name}`,
      text: `From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ error: 'Failed to send message. Try again later.' });
  }
});

app.post('/api/signup', (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  console.log("New user signed up:");
  console.log("Username:", username);
  console.log("Email:", email);
  console.log("Password:", password);

  res.status(201).json({ message: 'User registered successfully!' });
});
app.listen(3000, () => {
  console.log("Backend is running on http://localhost:3000");
});
