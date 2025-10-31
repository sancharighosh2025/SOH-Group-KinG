import express from "express";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';

const app = express();

const PORT = process.env.PORT || 5000;

//Allow multiple origins
const allowedOrigins = ['http://localhost:5173']

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: allowedOrigins, 
    credentials: true
}));

// Routes
app.get("/", (req, res) => {
  res.send("Hello TypeScript + Express!");
});

// Authentication routes
app.use('/api/auth', authRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
