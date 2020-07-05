import React from 'react';
import './styles/common.scss';
import './styles/grid.scss';
const Header  = () => {
  return <header className="c-header u-pad__2x">
    <div className="c-header__logo">
      <span>T</span>ech<span>N</span>ews
    </div>
    <div className="c-header__links">
      <a href="https://github.com/vivex/hacker-news">news</a> | <a href="https://github.com/vivex/hacker-news">about</a> | <a href="https://github.com/vivex/hacker-news">jobs</a>
    </div>
  </header>
};

export default Header;