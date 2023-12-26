import close from "./icon-close-menu.svg";
import menu from "./icon-hamburger.svg";
import { useState } from "react";
const Header = () => {
  const [toogle, settoogle] = useState(false)
  return (
    <div>
      <div className="Header">
        <div className="nav">
          <h1 className="title">Crowdfund</h1>
          <ul className="unorder">
            <li className="list">About</li>
            <li>Discover</li>
            <li>Get Started</li>
          </ul>
          <img onClick={() => settoogle(!toogle)} src={menu} alt="dsa" />
        </div>
      </div>
      {toogle ? <div className="toggle">
        <img onClick={() => settoogle(!toogle)}  src={close} alt="dsa" />
        <ul className="unorder">
          <li className="list">About</li>
          <li>Discover</li>
          <li>Get Started</li>
        </ul>
      </div>: ""}
    </div>
  );
};

export default Header;
