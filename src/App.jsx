import {Header} from './components/Header/Header'
import { Nav } from './components/Nav/Nav';
import { Home } from './components/Home/Home';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState, useRef } from 'react';
import { Theme } from './Theme';
import { ThemeProvider } from '@mui/styles';

function App() {
  const matches = useMediaQuery('(min-width:576px)');
  const navRef = useRef(null);
  const [showNav, setShowNav] = useState(false);
  const [hiddenNav, setHiddenNav] = useState(false);

  const toggleNav = () => {
    if(!showNav) return setShowNav(true);
    if(hiddenNav) return ;
    setHiddenNav(true);
    navRef?.current?.classList.add('nav--hide');
    setTimeout(() => {
      setShowNav(false);
      setHiddenNav(false);
    }, 300);
  }

  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Header toggleNav = {toggleNav} />
        {(matches || showNav) && <Nav ref={navRef} />}
        <Routes>
          <Route element={<Home/>} exact path="/home">
          </Route>
          <Route path="/" element={<Navigate to="/home" />}>
          </Route>
          <Route path="/FrontendTest_Venturit" element={<Navigate to="/home" />}>
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
    
  );
}

export default App;
