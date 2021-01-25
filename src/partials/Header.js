import React, { useState } from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Modal from './Modal';

function Header() {
  const [showModal, setShowModal] = useState(false);

  const showModalFunction = () => {
    setShowModal(!showModal);
  };

  return (
    <div className='header'>
      <div className='header_left'>
        <img src={'/assets/images/linkedin.svg'} alt='img' />

        <div className='header_search'>
          {/* search icon */}
          <SearchIcon />
          <input type='text' placeholder='Search' />
        </div>
      </div>
      <div className='header_right'>
        <HeaderOptions title='Home' Icon={HomeIcon} />
        <HeaderOptions title='Community' Icon={SupervisorAccountIcon} />
        <HeaderOptions title='Jobs' Icon={BusinessCenterIcon} />
        <HeaderOptions title='Messaging' Icon={ChatIcon} />
        <HeaderOptions title='Notifications' Icon={NotificationsIcon} />
        <HeaderOptions title='Me' onClick={showModalFunction} avatar={true} />
      </div>

      {showModal && <Modal />}
    </div>
  );
}

export default Header;
