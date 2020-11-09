import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/104887835/original/b82000b23c2563d6548bea33408c1bff4952984e/design-a-logo-for-your-company-or-else.png"
        alt="logo"
      />
      <i className="fa fa-cogs header__settingsLogo"></i>
    </div>
  );
}

export default Header;
