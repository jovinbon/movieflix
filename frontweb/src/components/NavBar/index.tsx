import './styles.css';
import 'bootstrap/js/src/collapse.js';
import { useContext, useEffect } from 'react';
import { AuthContext } from 'AuthContext';
import { getTokenData, isAuthenticated } from 'util/auth';
import { removeAuthData } from 'util/storage';
import history from 'util/history';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { authContextData, setAuthContextData } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: false,
    });
    history.replace('/');
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark main-nav">
      <div className="container-fluid">
        <h4>MovieFlix</h4>
        {authContextData.authenticated ? (
          <div className="div-logout">
            <a href="#logout" onClick={handleLogoutClick}>
              <h6>SAIR</h6>
            </a>
          </div>
        ) : (
          <Link to="/"></Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
