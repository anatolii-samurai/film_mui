import { createContext, useContext, useState } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

const AuthContext = createContext(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = ()=> useContext(AuthContext);

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({children}) => {
    
    const [user,setUser] = useState(null)

    return (
        <AuthContext.Provider value={{user,setUser}}>
            {children}
        </AuthContext.Provider>
    );
};

export const RequireAuth = () => {
    const { user } = useAuth();
    const location = useLocation();
    if (!user) {
      return (
        <Navigate
          to={{ pathname: "/unauthorized", state: { from: location } }}
          replace
        />
      );
    }
    return <Outlet />;
  };