import { Link,Routes, Route, BrowserRouter as Router, NavLink } from "react-router-dom"
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import CharactersPage from './pages/CharactersPage/Characters';
import DetailsPage from './pages/DetailsPages/DetailsPages';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-header">

          <Link to="/">Home</Link>
          <Link to="/characters">Characters</Link>

          <NavLink to="/" className={({ isActive }) => isActive ? "active" : undefined}
          >
            Home
          </NavLink>

          <NavLink
            to="/characters"
            className={({ isActive }) =>
              isActive ? "active" : undefined
            }
          >
            Characters
          </NavLink>

          <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/characters" element={<CharactersPage></CharactersPage>}></Route>
            <Route path="/characters/:id" element={<DetailsPage></DetailsPage>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
