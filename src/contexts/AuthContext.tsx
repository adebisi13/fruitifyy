import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  avatar: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, username: string, email: string, password: string) => Promise<void>;
  signOut: () => void;
  updateUser: (userData: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('fruitify_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const signIn = useCallback(async (email: string, _password: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock authentication - in real app, validate with backend
    // Password validation would happen here in production
    const mockUser: User = {
      id: 'user-1',
      name: 'Lateef Abiodun',
      username: 'lateef_abiodun',
      email: email,
      avatar: 'https://i.pravatar.cc/150?img=1'
    };
    
    setUser(mockUser);
    localStorage.setItem('fruitify_user', JSON.stringify(mockUser));
  }, []);

  const signUp = useCallback(async (name: string, username: string, email: string, _password: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Password validation would happen here in production
    
    const mockUser: User = {
      id: `user-${Date.now()}`,
      name,
      username,
      email,
      avatar: 'https://i.pravatar.cc/150?img=1'
    };
    
    setUser(mockUser);
    localStorage.setItem('fruitify_user', JSON.stringify(mockUser));
  }, []);

  const signOut = useCallback(() => {
    setUser(null);
    localStorage.removeItem('fruitify_user');
  }, []);

  const updateUser = useCallback((userData: Partial<User>) => {
    setUser(prev => {
      if (!prev) return null;
      const updated = { ...prev, ...userData };
      localStorage.setItem('fruitify_user', JSON.stringify(updated));
      return updated;
    });
  }, []);

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated: !!user, 
      signIn, 
      signUp, 
      signOut,
      updateUser 
    }}>
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