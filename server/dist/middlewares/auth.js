import jwt from 'jsonwebtoken';
import prisma from '../config/prisma.js';
export const authenticateToken = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN
        if (!token) {
            return res.status(401).json({ message: 'Access token required' });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Get user from database
        const user = await prisma.user.findUnique({
            where: { id: decoded.userId },
            select: {
                id: true,
                name: true,
                email: true,
                mobile: true
            }
        });
        if (!user) {
            return res.status(401).json({ message: 'Invalid token' });
        }
        req.user = {
            id: user.id,
            name: user.name,
            email: user.email,
            mobile: Number(user.mobile)
        };
        next();
    }
    catch (error) {
        console.error('Auth middleware error:', error);
        return res.status(403).json({ message: 'Invalid or expired token' });
    }
};
export const optionalAuth = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            return next();
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await prisma.user.findUnique({
            where: { id: decoded.userId },
            select: {
                id: true,
                name: true,
                email: true,
                mobile: true
            }
        });
        if (user) {
            req.user = {
                id: user.id,
                name: user.name,
                email: user.email,
                mobile: Number(user.mobile)
            };
        }
        next();
    }
    catch (error) {
        // If token is invalid, just continue without user
        next();
    }
};
