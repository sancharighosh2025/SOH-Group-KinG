import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../config/prisma.ts';
import { CreateUserData, LoginData, UserResponse } from '../models/User.ts';

export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, mobile, password }: CreateUserData = req.body;

    // Validation
    if (!name || !email || !mobile || !password) {
      return res.status(400).json({ 
        message: 'Name, email, mobile number, and password are required' 
      });
    }

    // Validate mobile number format
    const mobileStr = mobile.toString();
    if (!/^\d{10}$/.test(mobileStr)) {
      return res.status(400).json({ 
        message: 'Mobile number must be exactly 10 digits' 
      });
    }

    if (password.length < 6) {
      return res.status(400).json({ 
        message: 'Password must be at least 6 characters long' 
      });
    }

    // Check if user already exists
    const mobileNumber = BigInt(mobile);
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email: email },
          { mobile: mobileNumber }
        ]
      }
    });

    if (existingUser) {
      return res.status(409).json({ 
        message: 'User with this email or mobile number already exists' 
      });
    }

    // Hash password
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create user
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        mobile: mobileNumber,
        password: hashedPassword
      },
      select: {
        id: true,
        name: true,
        email: true,
        mobile: true,
        created_at: true
      }
    });

    // Generate JWT token
    const token = jwt.sign(
      { userId: newUser.id },
      process.env.JWT_SECRET as string,
      { expiresIn: process.env.JWT_EXPIRES_IN || '7d' } as jwt.SignOptions
    );

    const userResponse: UserResponse = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      mobile: Number(newUser.mobile),
      created_at: newUser.created_at
    };

    res.status(201).json({
      message: 'User created successfully',
      user: userResponse,
      token
    });

  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ 
      message: 'Internal server error during signup' 
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password }: LoginData = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({ 
        message: 'Email and password are required' 
      });
    }

    // Find user
    const user = await prisma.user.findUnique({
      where: { email: email },
      select: {
        id: true,
        name: true,
        email: true,
        mobile: true,
        password: true,
        created_at: true
      }
    });

    if (!user) {
      return res.status(401).json({ 
        message: 'Invalid email or password' 
      });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ 
        message: 'Invalid email or password' 
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET as string,
      { expiresIn: process.env.JWT_EXPIRES_IN || '7d' } as jwt.SignOptions
    );

    const userResponse: UserResponse = {
      id: user.id,
      name: user.name,
      email: user.email,
      mobile: Number(user.mobile),
      created_at: user.created_at
    };

    res.json({
      message: 'Login successful',
      user: userResponse,
      token
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ 
      message: 'Internal server error during login' 
    });
  }
};

export const logout = async (req: Request, res: Response) => {
  try {
    // Since we're using JWT, logout is handled on the client side
    // We could implement a token blacklist here if needed
    res.json({ 
      message: 'Logout successful' 
    });
  } catch (error) {
    console.error('Logout error:', error);
    res.status(500).json({ 
      message: 'Internal server error during logout' 
    });
  }
};

export const getProfile = async (req: any, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ 
        message: 'Authentication required' 
      });
    }

    // Get fresh user data from database
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        name: true,
        email: true,
        mobile: true,
        created_at: true
      }
    });

    if (!user) {
      return res.status(404).json({ 
        message: 'User not found' 
      });
    }

    const userResponse: UserResponse = {
      id: user.id,
      name: user.name,
      email: user.email,
      mobile: Number(user.mobile),
      created_at: user.created_at
    };

    res.json({
      message: 'Profile retrieved successfully',
      user: userResponse
    });

  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({ 
      message: 'Internal server error while fetching profile' 
    });
  }
};

export const updateProfile = async (req: any, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ 
        message: 'Authentication required' 
      });
    }

    const { name, email, mobile } = req.body;

    if (!name || !email || !mobile) {
      return res.status(400).json({ 
        message: 'Name, email, and mobile number are required' 
      });
    }

    // Check if email is already taken by another user
    const existingUser = await prisma.user.findFirst({
      where: {
        email: email,
        id: { not: req.user.id }
      }
    });

    if (existingUser) {
      return res.status(409).json({ 
        message: 'Email is already taken by another user' 
      });
    }

    // Update user
    const mobileNumber = BigInt(mobile);
    const updatedUser = await prisma.user.update({
      where: { id: req.user.id },
      data: {
        name,
        email,
        mobile: mobileNumber
      },
      select: {
        id: true,
        name: true,
        email: true,
        mobile: true,
        created_at: true
      }
    });

    const userResponse: UserResponse = {
      id: updatedUser.id,
      name: updatedUser.name,
      email: updatedUser.email,
      mobile: Number(updatedUser.mobile),
      created_at: updatedUser.created_at
    };

    res.json({
      message: 'Profile updated successfully',
      user: userResponse
    });

  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({ 
      message: 'Internal server error while updating profile' 
    });
  }
};
