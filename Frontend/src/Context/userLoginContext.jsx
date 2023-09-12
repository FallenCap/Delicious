import React, { useContext, useState } from 'react';

const UserContext = React.createContext();
const UserUpdateContext = React.createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const useSetUser = () => {
  return useContext(UserUpdateContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  // console.log(user);
  return (
    <UserContext.Provider value={user}>
      <UserUpdateContext.Provider value={setUser}>
        {children}
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  );
};
