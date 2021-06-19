import { HashRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import MovieList from '../MovieList/MovieList';
import DetailsView from '../DetailsView/DetailsView';
import AddMovie from '../AddMovie/AddMovie';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* Navigation Bar */}
      <Router>
        <nav>
          <ul className="navigation-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/addMovie">Add A Movie</Link>
            </li>
          </ul>
        </nav>
        {/* Movie List */}
        <Route path="/" exact>
          <MovieList />
        </Route>

        {/* Details page */}
        <Route path="/details">
          <DetailsView />
        </Route>
        {/* Add Movie page */}
          <AddMovie />
      </Router>
    </div>
  );
}


export default App;
