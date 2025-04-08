import React, { useContext } from 'react';

const ThemeContext = React.createContext('light');

const ThemeComponent = () => {
  const theme = useContext(ThemeContext);

  return <div>Current theme: {theme}</div>;
};

const App = () => {
  return (
    <ThemeContext.Provider value="dark">
      <ThemeComponent />
    </ThemeContext.Provider>
  );
};

export default App;
