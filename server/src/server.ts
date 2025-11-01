import express from "express";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';
import cartRoutes from './routes/cart.routes.js';

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

// Cart routes
app.use('/api/cart', cartRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  // Verify environment variables are loaded
  if (!process.env.JWT_SECRET) {
    console.error('⚠️  WARNING: JWT_SECRET is not set in environment variables!');
  } else {
    console.log('✅ JWT_SECRET loaded successfully');
  }
  if (!process.env.DATABASE_URL) {
    console.error('⚠️  WARNING: DATABASE_URL is not set in environment variables!');
  } else {
    console.log('✅ DATABASE_URL loaded successfully');
  }
});
