import React from 'react';
import './styles/common.scss';
import './styles/grid.scss';
const Header  = () => {
  return <header className="c-header u-pad__2x">
    <div className="c-header__logo">
      <span>T</span>ech<span>N</span>ews
    </div>
    <div className="c-header__links">
      <a href="#">news</a> | <a href="#">about</a> | <a href="#">jobs</a>
    </div>
  </header>
};

export default Header;