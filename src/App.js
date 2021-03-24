import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import db from './db.json';

import GlobalStyle from './GloblaStyle';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import TreinosGratuitos from './components/TreinosGratuitos';
import Produtos from './components/Produtos';
import Ebooks from './components/Ebooks';
import { darkTheme, lightTheme } from './components/UI/theme';

function App() {
  const [theme, setTheme] = useState(true);

  function toggleTheme() {
    setTheme(!theme);
  }

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Router>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} theme={theme} />} />
          <Route path="/treinos-gratuitos" render={(props) => <TreinosGratuitos {...props} db={db} theme={theme} />} />
          <Route path="/produtos" render={(props) => <Produtos {...props} db={db} theme={theme} />} />
          <Route path="/e-books" render={(props) => <Ebooks {...props} db={db} theme={theme} />} />
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
