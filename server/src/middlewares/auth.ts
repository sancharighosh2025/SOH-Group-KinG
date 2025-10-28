import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';


export interface AuthRequest extends Request {
  user?: {
    id: string;
    name: string;
    email: string;
    mobile: number;
  };
}

export const authenticateToken = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (!token) {
      return res.status(401).json({ message: 'Access token required' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { userId: string };
    
    // Get user from database
    const user = await sql`
      SELECT id, name, email, mobile, created_at 
      FROM users 
      WHERE id = ${decoded.userId}
    `;

    if (user.length === 0) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    req.user = user[0] as { id: string; name: string; email: string; mobile: number };
    next();
  } catch (error) {
    console.error('Auth middleware error:', error);
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};

export const optionalAuth = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return next();
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { userId: string };
    
    const user = await sql`
      SELECT id, name, email, mobile, created_at 
      FROM users 
      WHERE id = ${decoded.userId}
    `;

    if (user.length > 0) {
      req.user = user[0] as { id: string; name: string; email: string; mobile: number };
    }
    
    next();
  } catch (error) {
    // If token is invalid, just continue without user
    next();
  }
};
