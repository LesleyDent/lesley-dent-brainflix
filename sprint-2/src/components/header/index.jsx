import React from 'react';
import './styles.scss';
import Logo from '../../assets/Logo/Logo-brainflix.svg';
import Upload from '../../assets/Icons/SVG/Icon-upload.svg';
import UserIcon from '../../assets/Images/Mohan-muruge.jpg';
import SearchIcon from '../../assets/Icons/SVG/Icon-search.svg';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <img className="header__logo" src={Logo} alt="Brainflix Logo" />
        </Link>
        <div className="header__inner">
          <label className="header__search-label">
            <img className="header__search-icon" src={SearchIcon} alt="Search Icon" />
            <input className="header__search" type="search" name="search" placeholder="Search" />
          </label>
          <Link to="/upload" className="header__button button button--icon">
            <img className="header__upload-icon" src={Upload} alt="Upload Icon" />
            UPLOAD
          </Link>
          <img className="header__user-icon" src={UserIcon} alt="User Icon" />
        </div>
      </div>
    </header >
  );
}

export default Header;

// would it make sense to make this a class function and set the current video to [] when you click the link?