// AuthContext.jsx
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuth: false,
    userDetails: null,
  });

  const loginUser = (userDetails) => {
    setAuthState({
      isAuth: true,
      userDetails,
    });
  };

  const logoutUser = () => {
    setAuthState({
      isAuth: false,
      userDetails: null,
    });
  };

  // 'providerState' is not defined
  // It seems like there's an unintentional comment left in the code.
  // Remove this line or define 'providerState' if needed.
  //** dont change the below code **
  // if (window.Cypress) {
  //   window.store = providerState;
  // }
  //** dont change the above code **

  const value = {
    authState,
    loginUser,
    logoutUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
