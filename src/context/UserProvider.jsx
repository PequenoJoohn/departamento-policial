import React, {
  useState, createContext,
} from 'react';

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [userContext, setUserContext] = useState();
  const [processosContext, setProcessosContext] = useState([]);

  return (
    <UserContext.Provider value={{
      userContext, setUserContext, processosContext, setProcessosContext,
    }}
    >
      {children}
    </UserContext.Provider>
  );
}
