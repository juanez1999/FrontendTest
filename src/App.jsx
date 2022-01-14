import {Header} from './components/Header/Header'
import { Nav } from './components/Nav/Nav';
import { Home } from './components/Home/Home';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Routes>
        <Route element={<Home/>} exact path="/home">
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
