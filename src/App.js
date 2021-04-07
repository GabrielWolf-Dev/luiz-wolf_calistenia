import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';

import db from './db.json';

import GlobalStyle from './GloblaStyle';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import TreinosGratuitos from './Components/TreinosGratuitos';
import Produtos from './Components/Produtos';
import Ebooks from './Components/Ebooks';
import Error404 from './Components/404';
import { darkTheme, lightTheme } from './Components/UI/theme';

export default function App() {
  const [theme, setTheme] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line global-require
    require('dotenv').config();
    ReactGA.initialize(process.env.REACT_APP_ID_GA);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

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
          <Route render={(props) => <Error404 {...props} theme={theme} />} />
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}
