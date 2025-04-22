import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Routes
app.get('/api/contact', (req, res) => {
  res.json({ message: 'Hello from backend!' });
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
