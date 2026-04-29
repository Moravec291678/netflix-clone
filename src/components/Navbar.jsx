import { Link } from "react-router-dom";
function Navbar({ selectedProfile }) {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <Link>Domovská stránka</Link>
          </li>
          <li>
            <Link>Pořady</Link>
          </li>
          <li>
            <Link>Filmy</Link>
          </li>
          <li>
            <Link>Nové a oblíbené</Link>
          </li>
          <li>
            <Link>Můj seznam</Link> 
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
