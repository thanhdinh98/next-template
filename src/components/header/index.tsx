import React from "react";

import Logo from "./logo";
import NavbarToggler from "./navbar-toggler";
import Menu from "./menu";

export default function Header() {
  return (
    <header className="header-area">
      <div className="main-header-area">
        <div className="classy-nav-container breakpoint-off">
          <div className="container">
            <nav className="classy-navbar justify-content-between" id="alimeNav">
              <Logo />
              <NavbarToggler />
              <Menu />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
