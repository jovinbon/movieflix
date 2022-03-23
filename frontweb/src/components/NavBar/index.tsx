import './styles.css';
import 'bootstrap/js/src/collapse.js';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark main-nav">
      <div className="container-fluid">
        <h4 className="nav-logo-text">MovieFlix</h4>
        <button className="btn btn-logout">
          <h6>SAIR</h6>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
