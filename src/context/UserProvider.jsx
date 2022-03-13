import React, {
  useState, createContext,
} from 'react';

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [userContext, setUserContext] = useState();
  const [processosContext, setProcessosContext] = useState([]);

  function handleUser(currentUser) {
    if (currentUser) {
      console.log('cccc');
    }
  }

  async function getValues() {
    console.log('bbbbb');
  }

  return (
    <UserContext.Provider value={{
      userContext, setUserContext, processosContext, setProcessosContext, getValues,
    }}
    >
      {children}
    </UserContext.Provider>
  );
}
