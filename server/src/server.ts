import cookieParser from "cookie-parser";
import express from "express";
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins= ['http://localhost:5173']

//Middleware configaration
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: allowedOrigins, credentials:true}))

app.get("/", (req, res) => {
  res.send("Hello from TypeScript backend!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
