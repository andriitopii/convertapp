import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Nav.scss";
import NavMenu from "../NavMenu/NavMenu";
const Nav = (active) => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/">
            <Logo />
          </Link>

          <NavMenu active={active}/>

          <ul className="flex-row">
            <li>
              <button type="button">Log in</button>
            </li>
            <li>
              <button type="button">Sing up</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
