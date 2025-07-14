import { Link, NavLink } from 'react-router-dom'; 
import logo from '../assets/images/logo.png';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Triathlon Challenge" height="60" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/inscricoes">Inscrições</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/loja">Loja</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/percurso">Percurso</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contato">Contato</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;