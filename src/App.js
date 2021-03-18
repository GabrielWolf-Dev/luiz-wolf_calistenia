import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './GloblaStyle';
import Header from './Components/Header';
import { darkTheme, lightTheme } from './Components/UI/theme';

function App() {
  const [theme, setTheme] = useState(true);

  function toggleTheme() {
    setTheme(!theme);
  }

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <Header toggleTheme={toggleTheme} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
