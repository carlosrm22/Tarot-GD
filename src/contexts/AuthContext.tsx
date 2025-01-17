import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const isAuth = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(isAuth);
  }, []);

  const login = (password: string): boolean => {
    const hashedPassword = btoa('quiero pene'); // Esta no es una forma segura de hash, solo es un ejemplo
    const isValid = btoa(password) === hashedPassword;

    if (isValid) {
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true');
    }

    return isValid;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  if (!isAuthenticated) {
    return (
      <div className="login-container">
        <form className="login-form" onSubmit={(e) => {
          e.preventDefault();
          const password = (e.currentTarget.elements.namedItem('password') as HTMLInputElement).value;
          login(password);
        }}>
          <h2>✧ Portal de Iniciados ✧</h2>
          <p>Ingresa la frase mística para acceder al conocimiento oculto.</p>
          <div className="input-group">
            <input
              type="password"
              name="password"
              className="mystic-input"
              placeholder="Frase Mística"
              autoComplete="off"
            />
          </div>
          <button type="submit">Iniciar el Viaje</button>
          <p className="hint">Pista: Luz en Extensión (en el lenguaje de los antiguos egipcios)</p>
        </form>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};