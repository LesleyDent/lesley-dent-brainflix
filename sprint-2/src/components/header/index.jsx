import React from 'react';
import './styles.scss';
import Logo from '../../assets/Logo/Logo-brainflix.svg';
import Upload from '../../assets/Icons/SVG/Icon-upload.svg';
import UserIcon from '../../assets/Images/Mohan-muruge.jpg';
import SearchIcon from '../../assets/Icons/SVG/Icon-search.svg';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={Logo} alt="Brainflix Logo" />
        <div className="header__inner">
          <label className="header__search-label">
            <img className="header__search-icon" src={SearchIcon} alt="Search Icon" />
            <input className="header__search" type="search" name="search" placeholder="Search" />
          </label>
          <button className="header__button">
            <img className="header__upload-icon" src={Upload} alt="Upload Icon" />UPLOAD</button>
          <img className="header__user-icon" src={UserIcon} alt="User Icon" />
        </div>
      </div>
    </header >
  );
}

export default Header;
