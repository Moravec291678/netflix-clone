import { Link } from "react-router-dom";
import searchIcon from "../images/search-icon.png";
import notificationIcon from "../images/notification.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
function Navbar({ selectedProfile }) {
  return (
    <header className="header">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/960px-Netflix_2015_logo.svg.png?_=20190206123158"
        alt=""
        className="logo"
      />
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <Link to={`/home/${selectedProfile.id}`}>Domovská stránka</Link>
          </li>
          <li>
            <Link to={"/"}>Pořady</Link>
          </li>
          <li>
            <Link to={"/"}>Filmy</Link>
          </li>
          <li>
            <Link to={"/"}>Nové a oblíbené</Link>
          </li>
          <li>
            <Link to={"/"}>Můj seznam</Link>
          </li>
        </ul>
      </nav>
      <div className="header-right">
        <img className="search-icon" src={searchIcon} alt="search" />
        <span className="kid-btn">Deti</span>

        <img src={notificationIcon} alt="notification" />
        <div className="small-profile">
          <img src={selectedProfile.avatar} alt={selectedProfile.name} />
          <FontAwesomeIcon icon={faChevronUp} />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
