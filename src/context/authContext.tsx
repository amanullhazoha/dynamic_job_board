import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { createContext, useState, ReactNode, useEffect } from "react";

interface authContextType {
  user: any | null;
  isAuthenticated: boolean;
  setUser: (user: any | null) => void;
  setIsAuthenticated: (auth: boolean) => void;
}

interface authContextProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<authContextType | undefined>(undefined);

const AuthContextProvider: React.FC<authContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<any | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const accessToken: string | undefined = Cookies.get("access_token");

  useEffect(() => {
    if (accessToken) {
      const dataDecode = accessToken && jwtDecode(accessToken);

      if (dataDecode) {
        setUser(dataDecode);
        setIsAuthenticated(true);
      }
    } else {
      setUser(null);
    }
  }, [accessToken]);

  const value = {
    user,
    setUser,
    isAuthenticated,
    setIsAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
