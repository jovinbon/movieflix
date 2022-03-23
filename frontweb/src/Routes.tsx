import NavBar from 'components/NavBar';
import PrivateRoute from 'components/PrivateRoute';
import Catalog from 'pages/Private/Catalog';
import Home from 'pages/Home';
import MovieDetail from 'pages/Private/MovieDatail';
import { Router, Route, Switch } from 'react-router-dom';
import history from 'util/history';

const Routes = () => (
  <Router history={history}>
    <NavBar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <PrivateRoute path="/movies">
        <Route path="/movies" exact>
          <Catalog />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetail/>
        </Route>
      </PrivateRoute>
    </Switch>
  </Router>
);

export default Routes;
