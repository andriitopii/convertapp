import { Link } from "react-router-dom";
import "./NavMenu.scss";
import { useEffect, useState } from "react";
const NavMenu = () => {
  const [ur, setUr] = useState(window.location.href);

  const activeBtn = (e) => {
    const elembtAll = document.querySelectorAll(".nav-menu__link");
    elembtAll.forEach((val) => {
      val.classList.remove("nav-menu__link--active");
    });
    const element = e.target;
    element.classList.toggle("nav-menu__link--active");
    setUr(element.href);

  };

  useEffect(()=>{
    const def = () => { 
    const elembtAll = document.querySelectorAll(".nav-menu__link");
    elembtAll.forEach((val) => {
      if(val.href === ur){
        val.classList.add('nav-menu__link--active')
      }
    }); 
}
def();
  }, [ur]);

  return (
    <ul className="nav-menu flex-row">
      <li>
        <Link className="nav-menu__link" onClick={(e) => activeBtn(e)} to="/">
          Home
        </Link>
      </li>
      <li>
        <Link
          className="nav-menu__link"
          onClick={(e) => activeBtn(e)}
          to="/crypto"
        >
          Crypto
        </Link>
      </li>
      <li>
        <Link
          className="nav-menu__link"
          onClick={(e) => activeBtn(e)}
          to="/blog"
        >
          Blog
        </Link>
      </li>
      <li>
        <Link
          className="nav-menu__link"
          onClick={(e) => activeBtn(e)}
          to="/resoursec"
        >
          Resources
        </Link>
      </li>
      <li>
        <Link
          className="nav-menu__link"
          onClick={(e) => activeBtn(e)}
          to="/faq"
        >
          FAQ
        </Link>
      </li>
    </ul>
  );
};

export default NavMenu;
