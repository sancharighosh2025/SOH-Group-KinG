export interface User {
  id: string;
  name: string;
  email: string;
  mobile: number;
  password: string;
  created_at: Date;
  updated_at: Date;
}

export interface CreateUserData {
  name: string;
  email: string;
  mobile: number;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface UserResponse {
  id: string;
  name: string;
  email: string;
  mobile: number;
  created_at: Date;
}
