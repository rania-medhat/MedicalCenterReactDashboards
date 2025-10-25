import React, { createContext, useContext, useState, useEffect } from 'react';

export type UserRole = 'patient' | 'doctor' | 'admin';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string, role: UserRole) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Mock login - in production, this would call an API
    // For demo purposes, we'll accept any credentials
    const mockUsers = [
      { id: '1', email: 'patient@demo.com', name: 'John Patient', role: 'patient' as UserRole },
      { id: '2', email: 'doctor@demo.com', name: 'Dr. Smith', role: 'doctor' as UserRole },
      { id: '3', email: 'admin@demo.com', name: 'Admin User', role: 'admin' as UserRole },
    ];

    const foundUser = mockUsers.find(u => u.email === email) || {
      id: Date.now().toString(),
      email,
      name: email.split('@')[0],
      role: 'patient' as UserRole,
    };

    setUser(foundUser);
    localStorage.setItem('user', JSON.stringify(foundUser));
  };

  const register = async (email: string, password: string, name: string, role: UserRole) => {
    // Mock registration
    const newUser: User = {
      id: Date.now().toString(),
      email,
      name,
      role,
    };

    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
