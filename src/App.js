import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import GlobalStyle from './GloblaStyle';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import TreinosGratuitos from './Components/TreinosGratuitos';
import Produtos from './Components/Produtos';
import Ebooks from './Components/Ebooks';
import { darkTheme, lightTheme } from './Components/UI/theme';

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
          <Route exact path="/" component={Home} />
          <Route path="/treinos-gratuitos" component={TreinosGratuitos} />
          <Route path="/produtos" component={Produtos} />
          <Route path="/e-books" component={Ebooks} />
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
