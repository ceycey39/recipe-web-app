import { createContext, useContext, useState, ReactNode } from 'react';
import { User, UserCredentials } from '../types/user';

interface AuthContextType {
  user: User | null;
  login: (credentials: UserCredentials) => Promise<void>;
  register: (data: UserCredentials & { username: string }) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (credentials: UserCredentials) => {
    // Simüle edilmiş login - gerçek uygulamada API çağrısı yapılacak
    const mockUser: User = {
      id: 1,
      username: 'test_user',
      email: credentials.email,
      avatar: 'https://via.placeholder.com/40',
      createdAt: new Date().toISOString(),
    };
    setUser(mockUser);
  };

  const register = async (data: UserCredentials & { username: string }) => {
    // Simüle edilmiş kayıt - gerçek uygulamada API çağrısı yapılacak
    const mockUser: User = {
      id: 1,
      username: data.username,
      email: data.email,
      avatar: 'https://via.placeholder.com/40',
      createdAt: new Date().toISOString(),
    };
    setUser(mockUser);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
