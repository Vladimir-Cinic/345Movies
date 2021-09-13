import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState(true);
  const toggleTheme = () => {
    setSelectedTheme(!selectedTheme);
  };

  return (
    <AppContext.Provider value={{ selectedTheme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
